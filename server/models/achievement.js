const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
//Schema for achievements section
const achievementSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    team: [
      {
        type: Object,
      },
    ],
  },
  { timestamps: true }
);
// delete "_id" property  and convert it to "id" instead on calling transform method
achievementSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});
// Convert schema to a mongoose model
module.exports = mongoose.model("Achievement", achievementSchema);
