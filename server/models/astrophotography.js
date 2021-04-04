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
    }
});

const Member1 = mongoose.model("Member1", memberSchema);
const astrophotographySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
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
        tags: [String],
        pic: {
            type: String,
            required: true
        },
        approved: {
            type: Boolean,
            default: false,
            required: true,
        },
        members: [memberSchema],
        issuedon: {
            type: Date,
        }
    },
    { timestamps: true }
);

astrophotographySchema.method("transform", function () {
    let obj = this.toObject();
    obj.id = obj._id;
    obj.picURL = `${process.env.BASE_URL}/images/${obj.pic}`;
    delete obj.pic;
    delete obj._id;
    return obj;
});

astrophotographySchema.pre('remove', function (next) {
    let userIds = this.members.map(member => member.user)
    this.model('User').update(
        { _id: { $in: userIds } },
        { $pull: { projects: this._id } },
        { multi: true },
        next
    );
});

astrophotographySchema.set('toObject', { virtuals: true });
astrophotographySchema.set('toJSON', { virtuals: true });

const Astrophotography = mongoose.model("Astrophotography", astrophotographySchema);
module.exports = { Member1, Astrophotography };
