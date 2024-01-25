const mongoose = require('mongoose');


const goalsSchema = new mongoose.Schema({
    Goals_ID: {
        type: String,
        required: true,
        unique: true,
    },
    Goals_Longterm: {
        type: String,
        required: true,
    },
    Goals_Shortterm: {
        type: String,
        required: true,
    },
    Staff_Email: {
        type: String,
        required: true,
    },
    Status_ID: {
        type: String,
        required: true,
    },
    Plan_ID: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'Goals' });

// Helper function to generate a unique Plan_ID
async function generateUniquePlanID() {
    const existingPlans = await this.find().sort({ Plan_ID: -1 }).limit(1);
    let lastPlanID = existingPlans.length > 0 ? existingPlans[0].Plan_ID : 'PLN-0000';
    let [, lastNumber] = lastPlanID.match(/(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `PLN-${nextNumber}`;
}


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

//Static create goals
goalsSchema.statics.createGoals = async function(goals) {
    //Validation
    if (!goals.staffEmail) {
        throw new Error('Something wrong with the data');
    }

    const uniqueGoalsID = await generateUniqueGoalsID.call(this);
    const uniquePlanID = await generateUniquePlanID.call(this);
    const uniqueStatusID = await generateUniqueStatusID.call(this);

    const goalsData = await this.create({
        Goals_ID: uniqueGoalsID,
        Goals_Longterm: goals.goalsLongterm,
        Goals_Shortterm: goals.goalsShortterm,
        Staff_Email: goals.staffEmail,
        Status_ID: uniqueStatusID,
        Plan_ID: uniquePlanID,
    })


    return goalsData;
}

//static get goals 
goalsSchema.statics.getGoalsByEmail = async function({ staffEmail }) {
    //validation
    if (!staffEmail) {
        throw new Error('Something wrong with the data');
    }

    //Get Goals
    const allGoalsDataArray = await this.find({ Staff_Email: staffEmail }).exec();
    if (!allGoalsDataArray) {
        throw new Error('Theres Something wrong with the server');
    }

    return allGoalsDataArray;
}



module.exports = mongoose.model('Goals', goalsSchema);