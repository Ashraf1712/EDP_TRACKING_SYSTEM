const mongoose = require('mongoose');
const goalsModel = require('./Goals');

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

// Add a pre-save hook to generate Plan_ID before saving
planSchema.pre('save', function(next) {
    if (!this.Plan_ID) {
        this.Plan_ID = generateUniquePlanID.call(this);
    }
    next();
});

//Static create plan
planSchema.statics.createPlan = async function(plan) {
    //Validation
    if (!plan.competencyAddress || !plan.competencyCluster || !plan.actionPlan || !plan.intervention) {
        throw new Error('Something wrong with the data');
    }

    const planData = await this.create({
        Plan_ID: await generateUniquePlanID.call(mongoose.model('Plan')),
        Competency_Address: plan.competencyAddress,
        Competency_Cluster: plan.competencyCluster,
        Action_Plan: plan.actionPlan,
        Intervention: plan.intervention,
        Remarks: plan.remarks,
        Goals_ID: await generateUniqueGoalsID.call(mongoose.model('Goals'))
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