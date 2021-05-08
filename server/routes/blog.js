const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const { drivePicParser } = require("../middleware/fileUpload");

// fetching all blogs through admin
router.get("/blogs", isSignedIn, isAdmin, (req, res) => {
  res.setHeader("Content-Range", "blogs 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  Blog.find({})
    .sort("-createdAt")
    .then((blogs) => {
      let arr = [];
      blogs.forEach((blog) => arr.push(blog.transform()));
      res.json(arr);
    })
    .catch((e) => console.log(e));
});

// fetching all accepted blogs to the frontend
router.get("/blogs/toUI", (req, res) => {
  Blog.find({ accepted: true })
    .sort("-createdAt")
    .populate("postedBy", "name registration_no year linkedin_url")
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((e) => console.log(e));
});

// fetching a blog with id
router.get("/blogs/:id", (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({ error: "not found !" });
  }

  Blog.findById(req.params.id)
    .then((blog) => {
      if (!blog) return res.json({ error: "not found !" });
      res.json(blog.transform());
    })
    .catch((e) => console.log(e));
});

// fetching a blog with id to the frontend
router.get("/blogstoUI/:id", (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({ error: "not found !" });
  }

  Blog.findById(req.params.id)
    .populate("postedBy", "name registration_no year linkedin_url")
    .then((blog) => {
      if (!blog) return res.json({ error: "not found !" });
      res.json(blog.transform());
    })
    .catch((e) => console.log(e));
});

// creating a blog
router.post("/blogs", isSignedIn, (req, res) => {
  const pic = req.body.pic;
  if (pic) {
    try {
      req.body.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  }
  const blog = new Blog(req.body);
  blog
    .save()
    .then((blog) => {
      const { id, title, body, postedBy, publishedAt, pic } = blog.transform();
      User.findByIdAndUpdate(
        postedBy,
        {
          $push: { blogs: id },
        },
        { new: true, useFindAndModify: false },
        (e, user) => {
          if (e) return res.status(422).json({ error: e });
          res.json({
            id: id.toString(),
            title,
            body,
            pic,
            postedBy,
            publishedAt,
          });
        }
      );
    })
    .catch((e) => console.log(e));
});

// updating a blog
router.put("/blogs/:id", isSignedIn, isAdmin, (req, res) => {
  console.log(req.params.id)
  const pic = req.body.pic;
  if (pic) {
    try {
      req.body.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  }
  Blog.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        pic: req.body.pic,
        body: req.body.body,
        postedBy: req.body.postedBy,
        publishedAt: req.body.publishedAt,
        accepted: req.body.accepted,
        acceptedBy: req.body.acceptedBy,
      },
    },
    { returnOriginal: true },
    (e, blog) => {
      if (e) {
        return res.status(400).json({
          error: "Project cannot be updated !",
        });
      }
      const old_pb = blog.postedBy.toString();
      const new_pb = req.body.postedBy;

      if (old_pb !== new_pb) {
        User.findOneAndUpdate(
          { _id: old_pb },
          { $pull: { blogs: blog._id } },
          (e, user) => {
            if (e) {
              console.log(e);
              return res.status(400).json({
                error: "Posted By cannot be updated !",
              });
            }
          }
        );
        User.findOneAndUpdate(
          { _id: new_pb },
          { $addToSet: { blogs: blog._id } },
          (e, user) => {
            if (e) {
              console.log(e);
              return res.status(400).json({
                error: "Posted By cannot be updated !",
              });
            }
          }
        );
      }
      res.json(blog.transform());
    }
  );
});

// deleting a blog
router.delete("/blogs/:id", isSignedIn, isAdmin, (req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if (err) return res.status(500).send(err);
    if (blog) {
      blog.remove(() => {
        return res.json(blog.transform());
      });
    }
  });
});

module.exports = router;
