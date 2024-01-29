const mongoose = require('mongoose');
const { generateUniqueID } = require('../utils/utils');
const Goals = require('./Goals');
const Plan = require('./Plan');
const Status = require('./Status');

const edpSchema = new mongoose.Schema({
    EDP_ID: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    created_by: {
        type: String,
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    updated_by: {
        type: String,
        required: true,
    }

}, { collection: 'EDP' });


//Static create goals
edpSchema.statics.createEDP = async function({ staffEmail }) {
    //Validation
    if (!staffEmail) {
        throw new Error('Something wrong with the data');
    }

    const uniqueEDPID = await generateUniqueID(this, 'EDP_ID');

    const edpData = await this.create({
        EDP_ID: uniqueEDPID,
        created_by: staffEmail,
        updated_by: staffEmail,
    })

    return edpData;
}

// //static get goals 
edpSchema.statics.getEDPByEmail = async function({ staffEmail }) {
    try {
        // Get EDP data by staff email
        const edp = await this.find({ created_by: staffEmail }).exec();

        // Extract EDP IDs from the fetched EDP data
        const edpIDs = edp.map(edp => edp.EDP_ID);

        // Fetch related Goals, Plan, and Status data using a single Promise.all
        const relatedData = await Promise.all(edpIDs.map(async(EDP_ID) => {
            const goalsData = await Goals.findOne({ EDP_ID }).select(['Goals_Longterm', 'Goals_Shortterm']).exec();
            const planData = await Plan.findOne({ EDP_ID }).select(['Competency_Address', 'Competency_Cluster', 'Action_Plan', 'Intervention', 'Remarks']).exec();
            const statusData = await Status.findOne({ EDP_ID }).select(['Status', 'Due_Date', 'Date_Agreement', 'Date_Review']).exec();

            return {
                goalsData,
                planData,
                statusData
            };
        }));

        // Format the data as needed
        const formattedGoals = edp.map((edpData, index) => {
            const { goalsData, planData, statusData } = relatedData[index];

            return {
                edpID: edpData.EDP_ID,
                updated_by: edpData.updated_by,
                goalsLongterm: goalsData ? goalsData.Goals_Longterm : null,
                goalsShortterm: goalsData ? goalsData.Goals_Shortterm : null,
                competencyAddress: planData ? planData.Competency_Address : null,
                competencyCluster: planData ? planData.Competency_Cluster : null,
                actionPlan: planData ? planData.Action_Plan : null,
                intervention: planData ? planData.Intervention : null,
                remarks: planData ? planData.Remarks : null,
                status: statusData ? statusData.Status : null,
                dueDate: statusData ? statusData.Due_Date : null,
                dateAgreement: statusData ? statusData.Date_Agreement : null,
                dateReview: statusData ? statusData.Date_Review : null,
            };
        });

        return formattedGoals;

    } catch (error) {
        console.error('Error fetching goals data:', error);
        throw new Error('Internal Server Error');
    }
}


module.exports = mongoose.model('EDP', edpSchema);