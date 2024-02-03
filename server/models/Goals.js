const mongoose = require('mongoose');
const { generateUniqueID } = require('../utils/utils');

const goalsSchema = new mongoose.Schema({
    Goals_Longterm: {
        type: String,
        required: true,
    },
    Goals_Shortterm: {
        type: String,
        required: true,
    },
    EDP_ID: {
        type: String,
        required: true,
        unique: true,
    }
}, { collection: 'Goals' })


//Static create goals
goalsSchema.statics.createGoals = async function(goals) {
    //Validation
    if (!goals) {
        throw new Error('Something wrong with the data');
    }

    const uniqueEDPID = await generateUniqueID(this, 'EDP_ID');

    const goalsData = await this.create({
        EDP_ID: uniqueEDPID,
        Goals_Longterm: goals.goalsLongterm,
        Goals_Shortterm: goals.goalsShortterm,
    })

    return goalsData;
}



module.exports = mongoose.model('Goals', goalsSchema);