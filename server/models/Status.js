const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    Status_ID: {
        type: String,
        required: true,
        unique: true,
    },
    Due_Date: {
        type: Date,
        required: true,
    },
    Date_Agreement: {
        type: Date,
        required: true,
    },
    Date_Review: {
        type: Date,
        required: true,
    },
    Goals_ID: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_by: {
        type: String,
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'Status' });

//Static create plan
statusSchema.statics.createStatus = async function(status) {
    //Validation
    if (!status.goalsID) {
        throw new Error('Something wrong with the data');
    }

    const statusData = await this.create({
        Status_ID: status.statusID,
        Due_Date: status.dueDate,
        Date_Agreement: status.dateAgreement,
        Date_Review: status.dateReview,
        Goals_ID: status.goalsID,
        updated_by: status.staffEmail,
    })

    return statusData;
}

//static get plan
statusSchema.statics.getStatusByGoalsID = async function(status) {
    //validation
    if (!status.goalsID) {
        throw new Error('Something wrong with the data');
    }

    const allStatusData = await this.find({ Goals_ID: status.goalsID }).toArray();
    if (!allStatusData) {
        throw new Error('Theres Something wrong with the server');
    }

    return allStatusData;
}

module.exports = mongoose.model('Status', statusSchema);