const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

// Creating schema for issue object (in MongoDB Collection)
const componentsIssueSchema = new mongoose.Schema(
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

componentsIssueSchema.method('transform', function () {
  let obj = this.toObject()
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

module.exports = mongoose.model("ComponentsIssue", componentsIssueSchema);
