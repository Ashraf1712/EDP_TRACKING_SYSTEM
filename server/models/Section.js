const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    Section_ID: {
        type: String,
        required: true,
    },
    Section: {
        type: String,
        required: true,
    }
}, { collection: 'Section' })


module.exports = mongoose.model('Section', sectionSchema);