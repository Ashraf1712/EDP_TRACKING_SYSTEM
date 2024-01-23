const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    Plan_ID: {
        type: String,
        required: true,
        unique: true,
    },
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
    Goals_ID: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'Plan' });

//Static create plan
planSchema.statics.createPlan = async function(plan) {
    //Validation
    if (!plan.planID) {
        throw new Error('Something wrong with the data');
    }

    const planData = await this.create({
        Plan_ID: plan.planID,
        Competency_Address: plan.competencyAddress,
        Competency_Cluster: plan.competencyCluster,
        Action_Plan: plan.actionPlan,
        Intervention: plan.intervention,
        Remarks: plan.remarks,
        Goals_ID: plan.goalsID
    })

    return planData;
}

//static get plan
planSchema.statics.getPlanByGoalsID = async function(plan) {
    //validation
    if (!plan.planID) {
        throw new Error('Something wrong with the data');
    }

    const allPlanDataArray = await this.find({ Goals_ID: plan.goalsID }).toArray();
    if (!allPlanDataArray) {
        throw new Error('Theres Something wrong with the server');
    }

    return allPlanDataArray;
}

module.exports = mongoose.model('Plan', planSchema);