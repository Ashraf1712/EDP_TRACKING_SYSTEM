const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

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

// Add a pre-save hook to generate Goals_ID before saving
goalsSchema.pre('save', async function(next) {
    if (!this.Goals_ID) {
        this.Goals_ID = await generateUniqueGoalsID.call(this);
    }
    next();
});

//Static create goals
goalsSchema.statics.createGoals = async function(goals) {
    //Validation
    if (!goals.staffEmail || !goals.statusID || !goals.planID) {
        throw new Error('Something wrong with the data');
    }

    const goalsData = await this.create({
        Goals_ID: goals.goalsID,
        Goals_Longterm: goals.goalsLongTerm,
        Goals_Shortterm: goals.goalsShortTerm,
        Staff_Email: goals.staffEmail,
        Status_ID: goals.statusID,
        Plan_ID: goals.planID,
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
    const allGoalsDataArray = await this.find({ Staff_Email: staffEmail }).toArray();
    if (!allGoalsDataArray) {
        throw new Error('Theres Something wrong with the server');
    }

    return allGoalsDataArray;
}

// Helper function to generate a unique Goals_ID
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

module.exports = mongoose.model('Goals', goalsSchema);