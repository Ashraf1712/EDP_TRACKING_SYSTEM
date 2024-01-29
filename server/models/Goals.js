const mongoose = require('mongoose');
const { generateUniqueID } = require('../utils/utils');
const Plan = require('./Plan')
const Status = require('./Status')

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


// async function updatePlan(planID, updatedData) {
//     return await Plan.findOneAndUpdate({ Plan_ID: planID }, {
//         $set: {
//             Competency_Address: updatedData.competencyAddress,
//             Competency_Cluster: updatedData.competencyCluster,
//             Action_Plan: updatedData.actionPlan,
//             Intervention: updatedData.intervention,
//             Remarks: updatedData.remarks,
//             updated_at: Date.now()
//         }
//     }, { new: true });
// }

// async function updateStatus(statusID, updatedData) {
//     return await Status.findOneAndUpdate({ Status_ID: statusID }, {
//         $set: {
//             Status: updatedData.status,
//             Due_Date: updatedData.dueDate,
//             Date_Agreement: updatedData.dateAgreement,
//             Date_Review: updatedData.dateReview,
//             updated_at: Date.now(),
//             updated_by: updatedData.updatedBy
//         }
//     }, { new: true });
// }

// goalsSchema.statics.updateGoalsByID = async function(updatedData) {
//     console.log(updatedData);
//     // Validation
//     if (!updatedData) {
//         throw new Error('Something wrong with the data');
//     }

//     try {
//         const updateGoalsResult = await this.findOneAndUpdate({ Goals_ID: updatedData.goalsID }, {
//             $set: {
//                 Goals_Longterm: updatedData.goalLongterm,
//                 Goals_Shortterm: updatedData.goalShortterm,
//                 updated_at: Date.now()
//             }
//         }, { new: true });

//         if (updateGoalsResult) {
//             console.log('Goals document updated successfully:', updateGoalsResult);

//             const updatePlanResult = await updatePlan(updatedData.planID, updatedData);

//             if (updatePlanResult) {
//                 console.log('Plan document updated successfully:', updatePlanResult);

//                 const updateStatusResult = await updateStatus(updatedData.statusID, updatedData);

//                 if (updateStatusResult) {
//                     console.log('Status document updated successfully:', updateStatusResult);
//                     return updateGoalsResult;
//                 } else {
//                     console.log('Status document not found');
//                     throw new Error('Status document not found');
//                 }
//             } else {
//                 console.log('Plan document not found');
//                 throw new Error('Plan document not found');
//             }
//         } else {
//             console.log('Goals document not found');
//             throw new Error('Goals document not found');
//         }
//     } catch (error) {
//         console.error('Error updating documents:', error);
//         throw error;
//     }

// };



module.exports = mongoose.model('Goals', goalsSchema);