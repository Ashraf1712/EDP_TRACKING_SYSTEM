const mongoose = require('mongoose');


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

// Helper function to generate a unique Status_ID
async function generateUniqueStatusID() {
    const existingStatuses = await this.find().sort({ Status_ID: -1 }).limit(1);
    let lastStatusID = existingStatuses.length > 0 ? existingStatuses[0].Status_ID : 'STS-0000';
    let [, lastNumber] = lastStatusID.match(/(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `STS-${nextNumber}`;
}

// Define the generateUniqueGoalsID function
async function generateUniqueGoalsID() {
    const existingGoals = await this.find().sort({ Goals_ID: -1 }).limit(1);
    let lastGoalsID = existingGoals.length > 0 ? existingGoals[0].Goals_ID : 'GLS/2024/0000';
    let [, year, lastNumber] = lastGoalsID.match(/(\d{4})\/(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        year = (parseInt(year) + 1).toString();
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `GLS/${year}/${nextNumber}`;
}


//Static create plan
statusSchema.statics.createStatus = async function(status) {
    //Validation
    if (!status.status || !status.dueDate) {
        throw new Error('Something wrong with the data');
    }

    const uniqueStatusID = await generateUniqueStatusID.call(this);
    const uniqueGoalsID = await generateUniqueGoalsID.call(this);

    const statusData = await this.create({
        Status_ID: uniqueStatusID,
        Status: status.status,
        Due_Date: status.dueDate,
        Date_Agreement: status.dateAgreement,
        Date_Review: status.dateReview,
        Goals_ID: uniqueGoalsID,
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