const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ComponentsIssueSchema = new mongoose.Schema(
    {
        component: {
          type: ObjectId,
          ref: "Component"
        },
        reason: {
          type: String,
          required:true
        },
        status: {
            type: String,
            default: "Requested",
            enum: ["Requested", "Issued", "Denied","Collected","Returned","Damaged"]
          },
        updated: Date,
        user:{
            type:ObjectId,
            ref:"User",
            required:true
        },
        num:{
          type:Number,
          required:true
        }
    },
    {timestamps:true}
);

ComponentsIssueSchema.method('transform', function () {
  let obj = this.toObject()
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

const ComponentsIssue = mongoose.model("ComponentsIssue", ComponentsIssueSchema);

module.exports = ComponentsIssue ;