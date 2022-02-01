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
tagRouter.post(
  "/tags",
  [body(["name"]).notEmpty().withMessage("No fields should be empty!")],
  errHandler,
  isSignedIn,
  isAdmin,
  createTag
);
tagRouter.put(
  "/tags/:id",
  [body(["name"]).notEmpty().withMessage("No fields should be empty!")],
  errHandler,
  isSignedIn,
  isAdmin,
  updateTag
);
tagRouter.delete("/tags/:id", isSignedIn, isAdmin, deleteTag);

module.exports = tagRouter;
