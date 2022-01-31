var multer = require("multer");// middleware for handling  multipart/form data like images
const uuid = require("uuid");// to generate unique identifier for image
var path = require("path");
const fs = require("fs");

const { Astrophotography, Member1 } = require("../models/astrophotography");
const User = require("../models/user");

//Configuring storage for images
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/astroimages");//specifying folder where images will be stored
  },
  filename: function (req, file, cb) {
    const fileName =
      Date.now() + "-" + uuid.v4() + path.extname(file.originalname);//Format in which image will be named
    req.fileURL = `${process.env.BASE_URL}/public/astroimages/${fileName}`;//set file url  to access the image
    cb(null, fileName);
  },
});
var upload = multer({ storage: storage }).single("file");
//Logic to save the uploaded image
exports.saveUploadPhoto = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    /*if the image is saved successfully make a new Astrophotography object and push
    in the members array the user who uploaded the image*/
    req.body.leader = req.user.id;
    req.body.pic = req.fileURL;
    if (req.body.tags) req.body.tags = JSON.parse(req.body.tags);
    const photoObj = new Astrophotography(req.body);
    photoObj.members.push(
      new Member1({ user: req.user.id, accepted: true, leader: true })
    );
// Send 400 error status if not saved successfully
    photoObj.save((err, photo) => {
      if (err) {
        return res.status(400).json({
          err: err.message,
        });
      }
      /*Grab userIds from members array ,find users and insert the photo id in the user's 
      photo array*/
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
          // populate the tags query field and members.user field
          photo
            .populate({
              path: "members.user tags",
              select: "name",
            })
            .execPopulate((err, popProject) => {
              return res.json(popProject);
            });
        }
      );
    });
  });
};
//Logic to edit image
exports.editUploadPhoto = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    //Check wheter user editing the image is an admin/superadmin or is present in members array 
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
    Astrophotography.findOne({ _id: req.params.id }).exec((err, photo) => {
      if (err) {
        return res.status(404).json({
          error: "Not FOUND",
        });
      }
      const oldPhoto = new URL(photo.pic);
      if (req.file)
        fs.unlink("." + oldPhoto.pathname, (err) => {
          if (err) console.log(err);
        });
        /* if the new properties are in request body update them otherwise stick to 
        original details*/
      photo.title = req.body.title ? req.body.title : photo.title;
      photo.instrumentUsed = req.body.instrumentUsed
        ? req.body.instrumentUsed
        : photo.instrumentUsed;
      photo.instrumentSettings = req.body.instrumentSettings
        ? req.body.instrumentSettings
        : photo.instrumentSettings;
      photo.desc = req.body.desc ? req.body.desc : photo.desc;
      photo.pic = req.file ? req.fileURL : photo.pic;
      //save updated photo
      photo.save((err, updatedPhoto) => {
        if (err) {
          return res.status(400).json({
            error: "Not FOUND",
          });
        }
        updatedPhoto
          .populate({
            path: "members.user tags",
            select: "name",
          })
          .execPopulate((err, popProject) => {
            return res.json(popProject);
          });
      });
    });
  });
};
