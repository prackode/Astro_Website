const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    pic: {
      type: String,
      default: ''
    },
    publishedAt: {
      type: Date,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    acceptedBy: {
      type: ObjectId,
      ref: 'User',
    }
  },
  { timestamps: true }
);

blogSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

blogSchema.pre('remove', function (next) {
  this.model('User').updateOne(
    { _id: { $in: this.postedBy } },
    { $pull: { blogs: this._id } },
    { multi: true },
    next
  );
});

module.exports = mongoose.model("Blog", blogSchema);
