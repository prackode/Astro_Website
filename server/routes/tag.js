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
tagRouter.get("/tag", getAllTags);
tagRouter.get("/tag/:id", getOneTag);
tagRouter.post(
  "/tag",
  [body(["name"]).notEmpty().withMessage("No fields should be empty!")],
  errHandler,
  isSignedIn,
  isAdmin,
  createTag
);
tagRouter.put(
  "/tag/:id",
  [body(["name"]).notEmpty().withMessage("No fields should be empty!")],
  errHandler,
  isSignedIn,
  isAdmin,
  updateTag
);
tagRouter.delete("/tag/:id", isSignedIn, isAdmin, deleteTag);

module.exports = tagRouter;
