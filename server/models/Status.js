const mongoose = require('mongoose');
const { generateUniqueID } = require('../utils/utils');

const statusSchema = new mongoose.Schema({
    Status: {
        type: String,
        required: true,
    },
    Due_Date: {
        type: Date,
        required: true,
    },
    Date_Agreement: {
        type: Date,
    },
    Date_Review: {
        type: Date,
    },
    EDP_ID: {
        type: String,
        required: true,
        unique: true,
    },
}, { collection: 'Status' });


//Static create plan
statusSchema.statics.createStatus = async function(status) {
    //Validation
    if (!status.status || !status.dueDate) {
        throw new Error('Something wrong with the data');
    }

    const uniqueEDPID = await generateUniqueID(this, 'EDP_ID');

    const statusData = await this.create({
        Status: status.status,
        Due_Date: status.dueDate,
        Date_Agreement: status.dateAgreement,
        Date_Review: status.dateReview,
        EDP_ID: uniqueEDPID,
    })

    return statusData;
}


module.exports = mongoose.model('Status', statusSchema);