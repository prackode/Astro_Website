const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

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

achievementSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

module.exports = mongoose.model("Achievement", achievementSchema);
