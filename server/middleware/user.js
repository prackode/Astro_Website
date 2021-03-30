const ComponentsIssue = require("../models/issue");
const { Project } = require("../models/project");
const User = require("../models/user");
const blog = require("../models/blog");
const { validationResult } = require("express-validator");

exports.getAllUsers = (req, res) => {
  res.setHeader("Content-Range", "users 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  User.find({})
    .sort("-createdAt")
    .then((users) => {
      let arr = [];
      users.forEach((user) => arr.push(user.transform()));
      res.json(arr);
    })
    .catch((e) => console.log(e));
};

exports.createUserFromAdmin = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const { name, email, year, linkedin_url, registration_no } = req.body;
  const password = process.env.secretPassword;
  const user = new User({
    name: name,
    email: email,
    year: year,
    registration_no: registration_no,
    linkedin_url: linkedin_url,
    password: password,
    canSignIn: false,
    confirmed: true,
  });
  user.save((err, newUser) => {
    if (!newUser)
      return res.status(400).json({ error: "Email address already exists !" });
    res.json(newUser.transform());
  });
};
exports.getSingleUser = (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({ error: "not found !" });
  }
  User.findById(req.params.id)
    .then((user) => {
      if (!user) return res.json({ error: "not found !" });
      res.json(user.transform());
    })
    .catch((e) => console.log(e));
};

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    blog.deleteMany({ postedBy: user._id }).then((blogs) => {
      return res.json({ user });
    });
  });
};

exports.requestComponent = (req, res) => {
  let component = req.component;
  if (component.available < req.body.num) {
    return res.status(400).json({
      error: "Not enough available.",
    });
  }

  const componentIssue = new ComponentsIssue({
    component: req.component._id,
    reason: req.body.reason,
    user: req.user.id,
    num: req.body.num,
  });

  componentIssue.save((err, componentIssue) => {
    if (err) {
      return res.status(400).json({
        error: "Cannot create component request.",
      });
    }
    componentIssue
      .populate({ path: "component", select: "name" })
      .execPopulate((err, populatedIssue) => {
        User.findById(req.user.id).exec((err, user) => {
          user.issues.push(populatedIssue._id);
          user.save((err, user) => {
            if (err) {
              return res.status(400).json({
                err: err.message,
              });
            }
          });
        });
        res.json({
          msg: `Successfully requested ${component.name}, wait for approval.`,
          componentIssue: populatedIssue,
        });
      });
  });
};

exports.getAllRequests = (req, res) => {
  res.setHeader("Content-Range", "issue 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  ComponentsIssue.find({})
    .populate("user")
    .populate("component")
    .exec((err, componentIssues) => {
      if (err) {
        return res.status(400).json({
          error: "Not FOUND",
        });
      }
      let arr = [];
      componentIssues.forEach((issue) => arr.push(issue.transform()));
      res.json(arr);
    });
};

exports.updateRequestStatus = (req, res) => {
  let flag = false;
  let diff = 0;
  const old_status = req.issue.status;
  const new_status = req.body.status;

  if (old_status === "Requested") {
    if (new_status === "Issued" || new_status === "Denied") {
      flag = true;
      if (new_status === "Issued") {
        diff = req.body.num * -1;
      }
    } else {
      return res.status(400).json({
        error: "Component can be issued or denied.",
      });
    }
  } else if (old_status === "Issued") {
    if (new_status === "Collected") {
      flag = true;
    } else {
      return res.status(400).json({
        error: "Component should be collected by student.",
      });
    }
  } else if (old_status === "Collected") {
    if (new_status === "Returned") {
      diff = req.body.num;
      flag = true;
    } else {
      return res.status(400).json({
        error: "Component can be Returned or marked as Damaged.",
      });
    }
  } else {
    return res.status(400).json({
      error: "Operation not allowed.",
    });
  }

  if (flag) {
    req.issue.status = new_status;

    req.issue.save((err, updatedIssue) => {
      if (err) {
        return res.status(400).json({
          error: "Cannot update the status.",
        });
      }
      req.issue.component.available += diff;
      req.issue.component.issued -= diff;
      req.issue.component.save((err, updatedComponent) => {
        if (err) {
          return res.status(400).json({
            error: "Not able to update component.",
          });
        }
        res.json({
          msg: "Transaction successfull",
        });
      });
    });
  }
};

exports.getIssueById = (req, res, next, id) => {
  ComponentsIssue.findOne({ _id: id })
    .populate("user")
    .populate("component")
    .exec((err, issue) => {
      if (err) {
        return res.status(400).json({
          error: "Not FOUND",
        });
      }
      req.issue = issue;
      next();
    });
};

exports.getMyRequests = (req, res) => {
  ComponentsIssue.find({ user: req.user.id })
    .populate("component")
    .exec((err, myRequests) => {
      if (err) {
        return res.status(400).json({
          error: "Cannot find your requests.",
        });
      }
      res.json(myRequests);
    });
};

exports.getMyInvites = (req, res) => {
  Project.find({
    members: { $elemMatch: { user: req.user.id, accepted: false } },
  })
    .populate({ path: "members.user", select: "name" })
    .exec((err, projects) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      res.json(projects);
    });
};

exports.updateMyProfile = (req, res) => {
  User
    .findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
          name: req.body.name,
          year: req.body.year,
          registration_no: req.body.regis_no,
          linkedin_url: req.body.linkedin,
        },
      },
      { new: true }
    )
    .populate("blogs")
    .populate({
      path: "projects",
      populate: { path: "members.user", select: "name" },
    })
    .then((updatedUser) => {
      if (!updatedUser)
        return res.status(400).json({
          error: "User cannot be updated !",
        });

      return res.json({ user: updatedUser.transform() });
    })
    .catch((e) => console.log(e));
};
exports.getMyDetails = (req, res) => {
  User
    .findById(req.user.id)
    .populate({
      path: "blogs",
      populate: { path: "acceptedBy", select: "name email" },
    })
    .populate("notifications")
    .populate({
      path: "projects",
      populate: { path: "members.user", select: "name" },
    })
    .populate({
      path: "issues",
      populate: { path: "component" },
    })
    .exec((err, user) => {
      res.json({ user: user.transform() });
    });
};

exports.acceptInvite = (req, res) => {
  const projectId = req.params.projectId;
  const userId = req.user.id;
  Project.findOne({ _id: projectId }).exec((err, project) => {
    if (err || !project) {
      return res.status(400).json({
        error: "Project not found in DB",
      });
    }
    let isInvited = false;
    let i = 0;
    for (; i < project.members.length; i++) {
      if (JSON.stringify(project.members[i].user) === JSON.stringify(userId)) {
        isInvited = true;
        break;
      }
    }
    if (!isInvited) {
      return res.status(400).json({
        error: "User not invited",
      });
    }
    project.members[i].accepted = true;
    project.save((err, updatedProject) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Cannot accept invite, try again",
        });
      }
      User.findById(req.user.id).exec((err, user) => {
        user.projects.push(projectId);
        user.projects.push(projectId);
        user.save((err, updatedUser) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              error: "Cannot accept invite, try again",
            });
          }
          updatedProject
            .populate({ path: "members.user", select: "name" })
            .execPopulate((err, populatedProject) => {
              res.json({
                project: populatedProject,
              });
            });
        });
      });
    });
  });
};

exports.updateProfileFromAdmin = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: { name: req.body.name, email: req.body.email, role: req.body.role, canSignIn: req.body.canSignIn, linkedin_url: req.body.linkedin_url },
    },
    { new: true }
  )
    .then((updatedUser) => {
      if (!updatedUser)
        return res.status(400).json({
          error: "User cannot be updated !",
        });

      return res.json(updatedUser.transform());
    })
    .catch((e) => console.log(e));
};
