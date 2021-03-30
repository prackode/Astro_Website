const express = require("express");
const router = express.Router();

const { getAllComponents, addComponent, updateComponent, deleteComponent, getComponentById, getAllComponentsFilter,upload } = require("../middleware/component");
const { isSignedIn, isAdmin } = require("../middleware/auth");

//params
router.param("componentId", getComponentById);

//get routes
router.get("/component", getAllComponents);
router.get("/component/filter", getAllComponentsFilter);

router.get('/component/:componentId', isSignedIn, (req, res) => {
  res.json(req.component.transform())
})

//create route
router.post(
  "/component",
  isSignedIn,
  isAdmin,
  upload.single('compImage'),
  addComponent
);
// body:{name, type, image_url, available}

//update route
router.put(
  "/component/:componentId",
  isSignedIn,
  isAdmin,
  updateComponent
);

//delete route
router.delete(
  "/component/:componentId",
  isSignedIn,
  isAdmin,
  deleteComponent
);

module.exports = router;