var mongoose = require("mongoose");

// Creating schema for component object (in MongoDB Collection)
var componentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    pic: {
      type: String,
      required: true,
    },
    available: {
      type: Number,
      required: true
    },
    issued: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

componentSchema.method('transform', function () {
  let obj = this.toObject()
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

module.exports = mongoose.model("Component", componentSchema);
