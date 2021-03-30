const express = require("express");
const router = express.Router();
const { Project, Member } = require("../models/project");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const { json } = require("express");
const User = require("../models/user");
const ObjectId = require("mongodb").ObjectId;
const jwt = require("jsonwebtoken");

// fetching all projects
router.get("/projects", isSignedIn, isAdmin, (req, res) => {
  res.setHeader("Content-Range", "projects 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");

  Project.find({})
    .then((projects) => {
      let arr = [];
      projects.forEach((project) => arr.push(project.transform()));
      res.json(arr);
    })
    .catch((e) => console.log(e));
});

router.get("/projects/approved", (req, res) => {
  Project.find({ approved: true, status: "Completed", featured: false })
    .populate({ path: "members.user", select: "name" })
    .exec((err, projects) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      res.json(projects);
    });
});

router.get("/projects/featured", (req, res) => {
  Project.find({ approved: true, status: "Completed", featured: true })
    .populate({ path: "members.user", select: "name" })
    .exec((err, projects) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      res.json(projects);
    });
});

router.get("/projects/featured_home", (req, res) => {
  Project.find({ approved: true, status: "Completed", featured: true, home: true })
    .populate({ path: "members.user", select: "name" })
    .exec((err, projects) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      res.json(projects);
    });
});

// fetching a projects with id
router.get("/projects/:id", (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({ error: "not found !" });
  }

  Project.findOne({ _id: req.params.id })
    .populate({ path: "members.user" })
    .then((project) => {
      const { authorization } = req.headers;
      if (!authorization) {
        project.description = undefined;
        return res.json(project.transform());
      } else {
        // finding the user with the id
        const token = authorization.replace("Bearer ", "");

        const payload = jwt.verify(
          token,
          process.env.JWT_SECRET,
          (err, payload) => payload
        );
        if (payload) {
          const { _id } = payload;
          User.findById(_id).exec((err, user) => {
            if (!user || !user.confirmed || !user.canSignIn) {
              project.description = undefined;
              return res.json(project.transform());
            } else {
              return res.json(project.transform());
            }
          });
        } else {
          project.description = undefined;
          return res.json(project.transform());
        }
      }
    })
    .catch((e) => console.log(e));
});

// creating a project
router.post("/projects", isSignedIn, (req, res) => {
  req.body.leader = req.user.id;
  const project = new Project(req.body);
  project.save((err, project) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: err.message,
      });
    }
    let userIds = project.members.map((member) => member.user);
    User.updateMany(
      { _id: { $in: userIds } },
      { $push: { projects: project._id } },
      (err, users) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            err: err.message,
          });
        }
        res.json(project.transform());
      }
    );
  });
});

// creating a project
router.post("/projects/user", isSignedIn, (req, res) => {
  req.body.leader = req.user.id;
  const project = new Project(req.body);
  project.members.push(
    new Member({ user: req.user.id, accepted: true, leader: true })
  );

  project.save((err, project) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: err.message,
      });
    }
    let userIds = project.members.map((member) => member.user);
    User.updateMany(
      { _id: { $in: userIds } },
      { $push: { projects: project._id } },
      (err, users) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            err: err.message,
          });
        }
        res.json(project);
      }
    );
  });
});

// updating a project
router.put("/projects/:id", isSignedIn, isAdmin, (req, res) => {
  Project.findOneAndReplace(
    { _id: req.params.id },
    req.body,
    null,
    (e, project) => {
      if (e) {
        return res.status(400).json({
          error: "Project cannot be updated !",
        });
      }
      const userIds_old = project.members.map((member) => member.user);
      const userIds_new = req.body.members.map((member) => member.user);
      const diff = userIds_old
        .concat(userIds_new)
        .filter(
          (item) => !userIds_old.includes(item) || !userIds_new.includes(item)
        );
      User.updateMany(
        { _id: { $in: userIds_new } },
        { $addToSet: { projects: project._id } },
        (err, users) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              err: err.message,
            });
          }
        }
      );
      User.updateMany(
        { _id: { $in: diff } },
        { $pull: { projects: { _id: project._id } } },
        (err, users) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              err: err.message,
            });
          }
        }
      );
      res.json(project.transform());
    }
  );
});

// deleting a project
router.delete("/projects/:id", isSignedIn, isAdmin, (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) return res.status(500).send(err);
    if (project) {
      project.remove(() => {
        return res.json(project);
      });
    }
  });
});

//Invite member to the project
router.post("/projects/invite", isSignedIn, (req, res) => {
  const { email, projectId } = req.body;
  let userId;
  User.findOne({ email: email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No such user found.",
      });
    }
    userId = user._id;
    Project.findById(projectId).exec((err, project) => {
      if (err || !project) {
        return res.status(400).json({
          error: "Project not found in DB",
        });
      }
      let isMember = false;
      for (mem of project.members) {
        if (JSON.stringify(mem.user) === JSON.stringify(userId)) {
          isMember = true;
          break;
        }
      }
      if (isMember) {
        return res.status(400).json({
          error: "User already a member.",
        });
      }
      project.members.push(
        new Member({ user: userId, accepted: false, leader: false })
      );
      project.save((err, updatedProject) => {
        if (err) {
          return res.status(400).json({
            error: "Cannot add project to member.",
          });
        }
        updatedProject
          .populate({
            path: "members.user",
            select: "name",
          })
          .execPopulate((err, populatedProject) => {
            res.json({
              msg: "Member added successfully",
              updatedProject: populatedProject,
            });
          });
      });
    });
  });
});

module.exports = router;
