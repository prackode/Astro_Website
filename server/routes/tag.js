// Importing npm modules
const express = require("express");
const { body } = require("express-validator");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const {
  getAllTags,
  getOneTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../middleware/tag");
const tagRouter = express.Router();
const { errHandler } = require("../middleware/errValidator");
tagRouter.get("/tags", getAllTags);
tagRouter.get("/tags/:id", getOneTag);

// Creating tag
tagRouter.post(
  "/tags",
  [body(["name"]).notEmpty().withMessage("No fields should be empty!")],
  errHandler,
  isSignedIn,
  isAdmin,
  createTag
);

// Updating tag
tagRouter.put(
  "/tags/:id",
  [body(["name"]).notEmpty().withMessage("No fields should be empty!")],
  errHandler,
  isSignedIn,
  isAdmin,
  updateTag
);

// Deleting tag
tagRouter.delete("/tags/:id", isSignedIn, isAdmin, deleteTag);

module.exports = tagRouter;
