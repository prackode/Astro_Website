const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date
    },
    private: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true })

newsSchema.method('transform', function () {
    let obj = this.toObject()
    obj.id = obj._id;
    delete obj._id;
    return obj;
});

module.exports = mongoose.model('News', newsSchema)