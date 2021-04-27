const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

tagSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  return obj;
});

tagSchema.pre("remove", function (next) {
  this.model("Astrophotography").update(
    { tags: this._id },
    { $pull: { tags: this._id } },
    { multi: true },
    next
  );
});

module.exports = mongoose.model("Tag", tagSchema);
