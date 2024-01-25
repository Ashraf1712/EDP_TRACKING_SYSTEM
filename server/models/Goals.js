const mongoose = require('mongoose');
const { generateUniquePlanID, generateUniqueGoalsID, generateUniqueStatusID } = require('./idGenerator');


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
    if (!this.Status_ID) {
        this.Status_ID = await generateUniqueStatusID();
    }
    if (!this.Goals_ID) {
        this.Goals_ID = await generateUniqueGoalsID();
    }
    if (!this.Plan_ID) {
        this.Plan_ID = await generateUniquePlanID();
    }
    next();
});

//Static create goals
goalsSchema.statics.createGoals = async function(goals) {
    //Validation
    if (!goals.staffEmail) {
        throw new Error('Something wrong with the data');
    }

    const goalsData = await this.create({
        Goals_ID: await generateUniqueGoalsID(),
        Goals_Longterm: goals.goalsLongterm,
        Goals_Shortterm: goals.goalsShortterm,
        Staff_Email: goals.staffEmail,
        Status_ID: await generateUniqueStatusID(),
        Plan_ID: await generateUniquePlanID(),
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