// Importing npm modules
const express = require("express");
const { isSignedIn, isAdmin } = require("../middleware/auth");
const { body } = require("express-validator");
const router = express.Router();
const {
  getMyRequests,
  getMyInvites,
  acceptInvite,
  getMyDetails,
  updateMyProfile,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateProfileFromAdmin,
  createUserFromAdmin,
  rejectInvite,
  acceptInvitePhoto,
  rejectInvitePhoto,
} = require("../middleware/user");

router.get("/users", getAllUsers);
router.post(
  "/users",
  isSignedIn,
  isAdmin,
  [
    body("name", "name is not present").exists(),
    body("email", "Invalid email").exists().isEmail(),
    body("registration_no", "registration_no is not present").exists(),
  ],
  createUserFromAdmin
);

router.get("/users/:id", getSingleUser);
router.delete("/users/:id", isSignedIn, isAdmin, deleteUser);
router.post("/my/updateProfile", isSignedIn, updateMyProfile);
router.put("/users/:id", isSignedIn, isAdmin, updateProfileFromAdmin);
router.get("/my/issue", isSignedIn, getMyRequests);
router.post("/my/details", isSignedIn, getMyDetails);
router.get("/my/invites", isSignedIn, getMyInvites);
router.get("/my/invites/accept/project/:projectId", isSignedIn, acceptInvite);
router.get("/my/invites/reject/project/:projectId", isSignedIn, rejectInvite);
router.get("/my/invites/accept/photo/:photoId", isSignedIn, acceptInvitePhoto);
router.get("/my/invites/reject/photo/:photoId", isSignedIn, rejectInvitePhoto);

module.exports = router;
