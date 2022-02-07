// Importing npm modules
const express = require("express");
const router = express.Router();

const { getAllComponents, addComponent, updateComponent, deleteComponent, getComponentById, getAllComponentsFilter } = require("../middleware/component");
const { upload } = require('../middleware/fileUpload')
const { isSignedIn, isAdmin } = require("../middleware/auth");

// params
router.param("componentId", getComponentById);

// Get routes
router.get("/component", getAllComponents);
router.get("/component/filter", getAllComponentsFilter);

router.get('/component/:componentId', isSignedIn, (req, res) => {
  res.json(req.component.transform())
})

// Create route
router.post(
  "/component",
  isSignedIn,
  isAdmin,
  upload.single('compImage'),
  addComponent
);
// body:{name, type, image_url, available}

// Update route
router.put(
  "/component/:componentId",
  isSignedIn,
  isAdmin,
  updateComponent
);

// Delete route
router.delete(
  "/component/:componentId",
  isSignedIn,
  isAdmin,
  deleteComponent
);

module.exports = router;
