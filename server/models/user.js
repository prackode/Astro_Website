var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    registration_no: {
      type: String,
      default: "xxxxxxxx",
    },
    year: {
      type: Number,
      default: -1,
    },
    linkedin_url: {
      type: String,
      default: "https://www.linkedin.com/in/username/",
    },
    encry_password: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    canSignIn: {
      type: Boolean,
      default: true
    },
    salt: String,
    role: {
      type: String,
      default: "User",
      enum: ["Super-Admin", "Admin", "User"],
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ComponentsIssue"
      }
    ],
    reset_pass_session: Boolean,
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  autheticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

userSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.salt;
  delete obj.encry_password;
  delete obj.createdAt;
  delete obj.updatedAt;
  return obj;
});

module.exports = mongoose.model("User", userSchema);
