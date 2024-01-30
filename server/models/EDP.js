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
        const edpData = await this.find({ created_by: staffEmail }).exec();

        // Extract EDP IDs from the fetched EDP data
        const edpIDs = edpData.map(edpData => edpData.EDP_ID);

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
        const formattedGoals = edpData.map((edpData, index) => {
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

// //static get goals 
edpSchema.statics.getEDPByID = async function({ edpID }) {
    try {
        // Get EDP data by EDP_ID
        const edpData = await this.findOne({ EDP_ID: edpID }).exec();

        if (!edpData) {
            throw new Error('EDP document not found');
        }

        // Fetch related Goals, Plan, and Status data
        const goalsData = await Goals.findOne({ EDP_ID: edpData.EDP_ID }).select(['Goals_Longterm', 'Goals_Shortterm']).exec();
        const planData = await Plan.findOne({ EDP_ID: edpData.EDP_ID }).select(['Competency_Address', 'Competency_Cluster', 'Action_Plan', 'Intervention', 'Remarks']).exec();
        const statusData = await Status.findOne({ EDP_ID: edpData.EDP_ID }).select(['Status', 'Due_Date', 'Date_Agreement', 'Date_Review']).exec();

        // Format the data as needed
        const formattedData = {
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

        return formattedData;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Internal Server Error');
    }

}

async function updateGoals(edpID, updatedData) {
    return await Goals.findOneAndUpdate({ EDP_ID: edpID }, {
        $set: {
            Goals_Longterm: updatedData.goalLongterm,
            Goals_Shortterm: updatedData.goalShortterm,
        }
    }, { new: true });
}

async function updatePlan(edpID, updatedData) {
    return await Plan.findOneAndUpdate({ EDP_ID: edpID }, {
        $set: {
            Competency_Address: updatedData.competencyAddress,
            Competency_Cluster: updatedData.competencyCluster,
            Action_Plan: updatedData.actionPlan,
            Intervention: updatedData.intervention,
            Remarks: updatedData.remarks,
        }
    }, { new: true });
}

async function updateStatus(edpID, updatedData) {
    return await Status.findOneAndUpdate({ EDP_ID: edpID }, {
        $set: {
            Status: updatedData.status,
            Due_Date: updatedData.dueDate,
            Date_Agreement: updatedData.dateAgreement,
            Date_Review: updatedData.dateReview,
        }
    }, { new: true });
}


edpSchema.statics.updateEDPByID = async function(updatedData) {
    // Validation
    if (!updatedData) {
        throw new Error('Something wrong with the data');
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const updatedEDPResult = await this.findOneAndUpdate({ EDP_ID: updatedData.edpID }, {
            $set: {
                updated_by: updatedData.staffEmail,
                updated_at: Date.now(),
            }
        }, { new: true });

        const updateGoalsResult = await updateGoals(updatedData.edpID, updatedData);
        const updatePlanResult = await updatePlan(updatedData.edpID, updatedData);
        const updateStatusResult = await updateStatus(updatedData.edpID, updatedData);

        const allResults = {
            edpID: updatedEDPResult.EDP_ID,
            updated_by: updatedEDPResult.updated_by,
            goalsLongterm: updateGoalsResult ? updateGoalsResult.Goals_Longterm : null,
            goalsShortterm: updateGoalsResult ? updateGoalsResult.Goals_Shortterm : null,
            competencyAddress: updatePlanResult ? updatePlanResult.Competency_Address : null,
            competencyCluster: updatePlanResult ? updatePlanResult.Competency_Cluster : null,
            actionPlan: updatePlanResult ? updatePlanResult.Action_Plan : null,
            intervention: updatePlanResult ? updatePlanResult.Intervention : null,
            remarks: updatePlanResult ? updatePlanResult.Remarks : null,
            status: updateStatusResult ? updateStatusResult.Status : null,
            dueDate: updateStatusResult ? updateStatusResult.Due_Date : null,
            dateAgreement: updateStatusResult ? updateStatusResult.Date_Agreement : null,
            dateReview: updateStatusResult ? updateStatusResult.Date_Review : null,
        };

        if (updatedEDPResult && updateGoalsResult && updatePlanResult && updateStatusResult) {
            console.log('All documents updated successfully');
            await session.commitTransaction();
            session.endSession();
            return allResults;
        } else {
            console.log('Some documents not found');
            throw new Error('Some documents not found');
        }
    } catch (error) {
        console.error('Error updating documents:', error);
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
};

edpSchema.statics.deleteEDPByID = async function({ edpID }) {
    // Validation
    if (!edpID) {
        throw new Error('Something wrong with the data');
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const deleteEDPResult = await this.findOneAndDelete({ EDP_ID: edpID });
        const deleteGoalsResult = await Goals.findOneAndDelete({ EDP_ID: edpID });
        const deletePlanResult = await Plan.findOneAndDelete({ EDP_ID: edpID });
        const deleteStatusResult = await Status.findOneAndDelete({ EDP_ID: edpID });

        if (deleteEDPResult && deleteGoalsResult && deletePlanResult && deleteStatusResult) {
            console.log('All documents deleted successfully');
            await session.commitTransaction();
            session.endSession();
            return "Done Delete";
        } else {
            console.log('Some documents not found');
            throw new Error('Some documents not found');
        }
    } catch (error) {
        console.error('Error Delete documents:', error);
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
}





module.exports = mongoose.model('EDP', edpSchema);