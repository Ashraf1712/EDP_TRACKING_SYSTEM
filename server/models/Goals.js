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
goalsSchema.statics.getGoalsByEmail = async function(goals) {
    //validation
    if (!goals.staffEmail || !goals.statusID || !goals.planID) {
        throw new Error('Something wrong with the data');
    }

    const allGoalsDataArray = await this.find({ Staff_Email: goals.staffEmail }).toArray();
    if (!allGoalsDataArray) {
        throw new Error('Theres Something wrong with the server');
    }

    return allGoalsDataArray;
}

module.exports = mongoose.model('Goals', goalsSchema);