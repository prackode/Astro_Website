const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { mailer } = require("./mailer");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user.save((err, newUser) => {
    if (!newUser)
      return res.status(400).json({ error: "Email address already exists !" });
    const jwtToken = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    mailer.sendMail({
      from: process.env.USER,
      to: req.body.email,
      subject: "Activate your account",
      html: `
      <h2>Hello ${req.body.name},</h2>
      <p style='font-size:1rem;'>Heartiest welcome from <strong>Aeroclub MNNIT</strong>.
      We hope you have an exciting and adrenaline-packed experience throughout your stay with us.
      You're just a step away from completion.</p>
      
      <h4><a href="${process.env.BASE_URL}/user/confirm/${jwtToken}">Click Here</a> to confirm your registration.</h4>
      
      <br/>
      <p class='float-left'>
      Team Aeroclub
      </p>
      <p class='float-left'>
      If you think it's not you, just ignore this email.
      </p>
      
     `
    });
    res
      .status(400)
      .json({ message: "Signedup success...Verify your email address!" });
  });
};

exports.confirm = (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(422).json({ error: err });
    const { _id } = payload;
    User.findById(_id).then((user) => {
      if (user.confirmed)
        return res.json({ error: "User already confirmed !" });

      if (!user) return res.json({ error: "User does not exists !" });
      user.confirmed = true;
      user.save().then((savedUser) => {
        return res.json({ message: "User Confirmed successfully !" });
      });
    });
  });
};

exports.Adminlogin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email or password do not match !",
      });
    }
    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email or password do not match !",
      });
    }
    res.json({ role: user.role, message: "Admin loggedIn successfully !" });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email or password do not match !",
      });
    }

    if (!user.confirmed)
      return res.status(400).json({
        error: "You need to verify your email before login !",
      });
    if (!user.canSignIn)
      return res.status(401).json({ error: "Your account is temporarily suspended!" });

    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email or password do not match !",
      });
    }
    // create jwt token
    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // put token in cookie
    res.cookie("token", jwtToken, { expire: new Date() + 9999 });
    res.json({ token: jwtToken, message: "LoggedIn Successfully !", user });
  })
}

exports.forgetPassword = (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user)
      return res.status(422).json({ error: "Email is not registered !" });

    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    user.reset_pass_session = true;
    mailer.sendMail(
      {
        from: process.env.USER,
        to: req.body.email,
        subject: "Password-Reset@aeroclubmnnit",
        html: `<h2>You requested for password reset</h2>
      <p>Click on this <a href="${process.env.BASE_URL}/user/resetpassword/${jwtToken}">link</a> to reset password<p>`,
      },
      (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Email sent: " + info.response);
          res.json({ message: "Checkout your registered email !" });
        }
      }
    );
    user.save()
  });
};

exports.resetPassword = (req, res) => {
  const newPassword = req.body.password;
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(422).json({ error: err });
    const { _id } = payload;
    User.findById(_id).exec((err, user) => {
      user.reset_pass_session = false;
      if (!user) return res.json({ error: "User does not exists !" });
      user.password = newPassword;
      user.save().then((savedUser) => {
        return res.json({ message: "Password updated successfully !" });
      }).catch(err => {
        res.status(422).json({ error: err });
      });
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully !",
  });
};

//custom middlewares
exports.isSignedIn = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ error: "You must be logged in !" });
  const token = authorization.replace("Bearer ", "");

  // verifying jwt token
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ error: "You must be logged in !" });
    const { _id } = payload;

    // finding the user with the id
    User.findById(_id)
      .exec((err, user) => {
        if (!user)
          return res.status(401).json({ error: "You must be logged in !" });
        if (!user.confirmed)
          return res.status(401).json({ error: "You must confirm your account first!" });
        if (!user.canSignIn)
          return res.status(401).json({ error: "Your account is temporarily suspended!" });

        req.user = user.transform()
        next();
      });
  });
};

exports.resetVerify = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    const { _id } = payload;

    User.findById(_id).exec((err, user) => {
      if (!user.reset_pass_session)
        return res
          .status(422)
          .json({ error: "Session has expired...try again !" });
      next();
    });
  });
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role === "User") {
    return res.status(403).json({
      error: "You are not ADMIN, Access denied",
    });
  }
  next();
};
