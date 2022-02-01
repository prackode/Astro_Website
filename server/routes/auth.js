const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");
const {
  forgetPassword,
  resetPassword,
  signout,
  signup,
  signin,
  isAdmin,
  isSignedIn,
  confirm,
  Adminlogin,
  resetVerify,
} = require("../middleware/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    body("email").custom((email) => {
      if (/^[A-Za-z0-9._%+-]+@mnnit.ac.in$/.test(email)) return true;
      throw new Error("Invalid email type !");
    }),
    body("password").custom((password) => {
      if (
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/.test(password)
      )
        return true;
      throw new Error("Invalid password type !");
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  signin
);

router.post("/user/confirm", confirm);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);
router.post("/signout", signout);
router.post("/resetverify", resetVerify);
router.post("/adminlogin", isSignedIn, isAdmin, Adminlogin);
router.post("/isAdmin", isSignedIn, isAdmin, (req, res) => {
  res.json({ message: "admin authorized successfully !" });
});
router.post("/isSignedIn", isSignedIn, (req, res) => {
  res.json({ message: "Authorized !", user: req.user });
});

module.exports = router;
