const express = require("express");
const router = express.Router();
const { Astrophotography, Member1 } = require("../models/astrophotography");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const User = require("../models/user");
const { drivePicParser } = require("../middleware/fileUpload");

// fetching all photos
router.get("/astrophotographies", isSignedIn, isAdmin, (req, res) => {
  res.setHeader("Content-Range", "astrophotographies 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");

  Astrophotography.find({})
    .populate("tags")
    .then((photos) => {
      let arr = [];
      photos.forEach((photo) => arr.push(photo.transform()));
      res.json(arr);
    })
    .catch((e) => console.log(e));
});

// fetching all approved photos
router.get("/astrophotographies/approved", (req, res) => {
  Astrophotography.find({ approved: true })
    .populate({ path: "tags" })
    .exec((err, photos) => {
      if (err) {
        console.log(err.message);
        return res.status(400).json({
          error: err.message,
        });
      }
      let arr = [];
      photos.forEach((photo) => arr.push(photo.transform()));
      res.json(arr);
    });
});

// fetching a projects with id
router.get("/astrophotographies/:id", (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({ error: "not found !" });
  }
  Astrophotography.findOne({ _id: req.params.id })
    .populate({ path: "members.user" })
    .populate("tags")
    .then((photo) => {
      return res.json(photo.transform());
    })
    .catch((e) => console.log(e));
});

// creating a photo
router.post("/astrophotographies", isSignedIn, (req, res) => {
  req.body.leader = req.user.id;
  const pic = req.body.pic;
  if (pic) {
    try {
      req.body.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  } else {
    return res.status(400).json({
      err: "Picture is compulsory",
    });
  }
  const photoObj = new Astrophotography(req.body);
  photoObj.save((err, photo) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: err.message,
      });
    }
    let userIds = photo.members.map((member) => member.user);
    User.updateMany(
      { _id: { $in: userIds } },
      { $push: { photos: photo._id } },
      (err, users) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            err: err.message,
          });
        }
        res.json(photo.transform());
      }
    );
  });
});

// creating a photo from dashboard
router.post("/astrophotographies/user", isSignedIn, (req, res) => {
  req.body.leader = req.user.id;
  const pic = req.body.pic;
  if (pic) {
    try {
      req.body.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  } else {
    return res.status(400).json({
      err: "Picture is compulsory",
    });
  }
  const photoObj = new Astrophotography(req.body);
  photoObj.members.push(
    new Member1({ user: req.user.id, accepted: true, leader: true })
  );

  photoObj.save((err, photo) => {
    if (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
    let userIds = photo.members.map((member) => member.user);
    User.updateMany(
      { _id: { $in: userIds } },
      { $push: { photos: photo._id } },
      (err, users) => {
        if (err) {
          return res.status(400).json({
            err: err.message,
          });
        }
        photo
          .populate({
            path: "members.user",
            select: "name",
          })
          .execPopulate((err, popProject) => {
            return res.json(popProject);
          });
      }
    );
  });
});

// updating a photo
router.put("/astrophotographies/:id", isSignedIn, (req, res) => {
  const pic = req.body.pic;
  if (pic) {
    try {
      req.body.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  } else {
    return res.status(400).json({
      err: "Picture is compulsory",
    });
  }

  Astrophotography.findOne({ _id: req.params.id })
    .then((project) => {
      const leaders = project.members.map((m) => {
        if (m.leader) return m.user;
      });
      if (
        !(
          req.user.role === "Admin" ||
          req.user.role === "Super-Admin" ||
          leaders.includes(req.user.id)
        )
      ) {
        return res.status(403).json({
          error: "You are not ADMIN nor member of project, Access denied",
        });
      }
    })
    .catch((e) => console.log(e));

  Astrophotography.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        instrumentUsed: req.body.instrumentUsed,
        instrumentSettings: req.body.instrumentSettings,
        members: req.body.members,
        desc: req.body.desc,
        approved: req.body.approved,
        issuedon: req.body.issuedon,
        tags: req.body.tags,
        pic: req.body.pic,
      },
    },
    { new: true },
    (e, photo) => {
      if (e) {
        return res.status(400).json({
          error: "Photo cannot be updated !",
        });
      }
      const userIds_old = photo.members.map((member) => member.user);
      const userIds_new = req.body.members.map((member) => member.user);
      const diff = userIds_old
        .concat(userIds_new)
        .filter(
          (item) => !userIds_old.includes(item) || !userIds_new.includes(item)
        );
      User.updateMany(
        { _id: { $in: userIds_new } },
        { $addToSet: { photos: photo._id } },
        (err, users) => {
          if (err) {
            return res.status(400).json({
              err: err.message,
            });
          }
        }
      );
      User.updateMany(
        { _id: { $in: diff } },
        { $pull: { photos: { _id: photo._id } } },
        (err, users) => {
          if (err) {
            return res.status(400).json({
              err: err.message,
            });
          }
        }
      );
      res.json(photo.transform());
    }
  );
});

// deleting a photo
router.delete("/astrophotographies/:id", isSignedIn, isAdmin, (req, res) => {
  Astrophotography.findById(req.params.id, (err, photo) => {
    if (err) return res.status(500).send(err);
    if (photo) {
      photo.remove(() => {
        return res.json(photo);
      });
    }
  });
});

//Invite member to the photo
router.post("/astrophotographies/invite", isSignedIn, (req, res) => {
  const { email, photoId } = req.body;
  let userId;
  User.findOne({ email: email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No such user found.",
      });
    }
    userId = user._id;
    Astrophotography.findById(photoId).exec((err, photo) => {
      if (err || !photo) {
        return res.status(400).json({
          error: "Photo not found in DB",
        });
      }
      let isMember = false;
      for (mem of photo.members) {
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
      photo.members.push(
        new Member1({ user: userId, accepted: false, leader: false })
      );
      photo.save((err, updatedPhoto) => {
        if (err) {
          return res.status(400).json({
            error: "Cannot add project to member.",
          });
        }
        updatedPhoto
          .populate({
            path: "members.user",
            select: "name",
          })
          .execPopulate((err, populatedPhoto) => {
            res.json({
              msg: "Member added successfully",
              updatedPhoto: populatedPhoto,
            });
          });
      });
    });
  });
});

module.exports = router;
