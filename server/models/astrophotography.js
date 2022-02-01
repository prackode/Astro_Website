const mongoose = require("mongoose");

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

const Member1 = mongoose.model("Member1", memberSchema);
const astrophotographySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    instrumentUsed: {
      type: String,
      required: true,
    },
    instrumentSettings: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    pic: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    members: [memberSchema],
    issuedon: {
      type: Date,
    },
  },
  { timestamps: true }
);
//delete "_id" property  and convert it to "id" instead on caliing transform method
astrophotographySchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});
//Before deleting grab users and delete id from the project array
astrophotographySchema.pre("remove", function (next) {
  let userIds = this.members.map((member) => member.user);
  this.model("User").update(
    { _id: { $in: userIds } },
    { $pull: { projects: this._id } },
    { multi: true },
    next
  );
});

const Astrophotography = mongoose.model(
  "Astrophotography",
  astrophotographySchema
);
module.exports = { Member1, Astrophotography };
