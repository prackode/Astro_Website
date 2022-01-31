const mongoose = require("mongoose");
//Schema of a member of the project
const memberSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  leader: {
    type: Boolean,
    default: false,
  },
});

const Member = mongoose.model("Member", memberSchema);
//Schema for projects
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
    compTech: [String],
    pic: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "Ongoing",
      enum: ["Ongoing", "Completed"],
      required: true,
    },
    approved: {
      type: Boolean,
      default: false,
      required: true,
    },
    members: [memberSchema],
    issuedon: {
      type: Date,
    },
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    home: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    acknowledgement: {
      type: String,
    },
    ytID: {
      type: String,
    },
    shareId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);
//delete "_id" property  and convert it to "id" instead on caliing transform method
projectSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});
/*Before deleting the project grab all users who are part of the project and delete
the project id from their 'projects' array*/ 
projectSchema.pre("remove", function (next) {
  let userIds = this.members.map((member) => member.user);
  this.model("User").update(
    { _id: { $in: userIds } },
    { $pull: { projects: this._id } },
    { multi: true },
    next
  );
});

const Project = mongoose.model("Project", projectSchema);
module.exports = { Member, Project };
