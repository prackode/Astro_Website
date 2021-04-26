const express = require("express");
const tagRouter = express.Router();
const Tag = require("../models/tag");

exports.getAllTags = (req, res) => {
  res.setHeader("Content-Range", "Tag 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");

  Tag.find({}).exec((err, tags) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    return res.json(tags.map((a) => a.transform()));
  });
};
exports.getOneTag = (req, res) => {
  Tag.findOne({ _id: req.params.id }).exec((err, tag) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    res.json(tag.transform());
  });
};
exports.createTag = (req, res) => {
  const tag = new Tag(req.body);
  tag.save((err, savedTag) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    res.json(savedTag.transform());
  });
};
exports.updateTag = (req, res) => {
  Tag.findOne({ _id: req.params.id }).exec((err, tag) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    const { name } = req.body;
    if (name) tag.name = name;
    tag.save((err, updatedTag) => {
      if (err) {
        return res.status(400).json({
          error: "Not FOUND",
        });
      }
      res.json(updatedTag.transform());
    });
  });
};
exports.deleteTag = (req, res) => {
  Tag.findByIdAndDelete(req.params.id, (err, deletedTag) => {
    if (err) {
      return res.status(400).json({
        error: "Not deleted",
      });
    }
    return res.json(deletedTag);
  });
};
