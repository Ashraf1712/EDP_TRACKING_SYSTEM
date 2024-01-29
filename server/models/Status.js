const mongoose = require('mongoose');


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

// Define the generateUniqueGoalsID function
async function generateUniqueEDPID() {
    const existingGoals = await this.find().sort({ EDP_ID: -1 }).limit(1);
    let lastEDPID = existingGoals.length > 0 ? existingGoals[0].EDP_ID : 'EDP/2024/0000';
    let [, year, lastNumber] = lastEDPID.match(/(\d{4})\/(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        year = (parseInt(year) + 1).toString();
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `EDP/${year}/${nextNumber}`;
}


//Static create plan
statusSchema.statics.createStatus = async function(status) {
    //Validation
    if (!status.status || !status.dueDate) {
        throw new Error('Something wrong with the data');
    }

    const uniqueEDPID = await generateUniqueEDPID.call(this);


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