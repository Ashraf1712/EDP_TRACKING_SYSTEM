const mongoose = require('mongoose');
const { generateUniqueID } = require('../utils/utils');

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


//Static create plan
planSchema.statics.createPlan = async function(plan) {
    //Validation
    if (!plan.competencyAddress || !plan.competencyCluster || !plan.actionPlan || !plan.intervention) {
        throw new Error('Something wrong with the data');
    }

    // Generate unique Plan_ID
    const uniqueEDPID = await generateUniqueID(this, 'EDP_ID');


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