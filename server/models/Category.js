const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    Category_ID: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    }
}, { collection: 'Category' })

module.exports = mongoose.model('Category', categorySchema);