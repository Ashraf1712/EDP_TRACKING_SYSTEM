const mongoose = require('mongoose');


const planSchema = new mongoose.Schema({
    Competency_Address: {
        type: String,
        required: true,
    },
    Competency_Cluster: {
        type: String,
        required: true,
    },
    Action_Plan: {
        type: String,
        required: true,
    },
    Intervention: {
        type: String,
        required: true,
    },
    Remarks: {
        type: String,
    },
    EDP_ID: {
        type: String,
        required: true,
        unique: true,
    },
}, { collection: 'Plan' });

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
planSchema.statics.createPlan = async function(plan) {
    //Validation
    if (!plan.competencyAddress || !plan.competencyCluster || !plan.actionPlan || !plan.intervention) {
        throw new Error('Something wrong with the data');
    }

    // Generate unique Plan_ID
    const uniqueEDPID = await generateUniqueEDPID.call(this);


    const planData = await this.create({
        EDP_ID: uniqueEDPID,
        Competency_Address: plan.competencyAddress,
        Competency_Cluster: plan.competencyCluster,
        Action_Plan: plan.actionPlan,
        Intervention: plan.intervention,
        Remarks: plan.remarks,
    })

    return planData;
}


module.exports = mongoose.model('Plan', planSchema);