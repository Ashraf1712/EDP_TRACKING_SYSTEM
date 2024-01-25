const mongoose = require('mongoose');
const { generateUniquePlanID, generateUniqueGoalsID, generateUniqueStatusID } = require('./idGenerator');


const statusSchema = new mongoose.Schema({
    Status_ID: {
        type: String,
        required: true,
        unique: true,
    },
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

// Add a pre-save hook to generate Status_ID before saving
statusSchema.pre('save', async function(next) {
    if (!this.Status_ID) {
        this.Status_ID = await generateUniqueStatusID();
    }
    if (!this.Goals_ID) {
        this.Goals_ID = await generateUniqueGoalsID();
    }
    next();
});


//Static create plan
statusSchema.statics.createStatus = async function(status) {
    //Validation
    if (!status.status || !status.dueDate) {
        throw new Error('Something wrong with the data');
    }

    const statusData = await this.create({
        Status_ID: await generateUniqueStatusID(),
        Status: status.status,
        Due_Date: status.dueDate,
        Date_Agreement: status.dateAgreement,
        Date_Review: status.dateReview,
        Goals_ID: await generateUniqueGoalsID(),
        updated_by: status.updatedBy,
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