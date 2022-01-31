const mongoose = require('mongoose')
//Schema for contact form
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },  
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })
//delete "_id" property  and convert it to "id" instead on caliing transform method
contactSchema.method('transform', function () {
    let obj = this.toObject()
    obj.id = obj._id;
    delete obj._id;
    return obj;
});

module.exports = mongoose.model('Contact', contactSchema)
