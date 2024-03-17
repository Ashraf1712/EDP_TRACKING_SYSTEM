
const { generateUniqueID } = require('../utils/utils');
const db = require('../config/db');


class Plan {
    static async createPlan(plan){
        //Validation
        if(!plan.competencyAddress ||!plan.competencyCluster ||!plan.actionPlan ||!plan.intervention){
            throw new Error('Something wrong with the data');
        }

        try{
            //Generate unique Plan_ID
            const uniqueEDPID = await generateUniqueID(db, 'edp_id', 'plan');
    
            const plantData = await db.promise().query('INSERT INTO plan (edp_id, competency_address,competency_cluster,action_plan,intervention,remarks) VALUES (?,?,?,?,?,?)',[
                uniqueEDPID,
                plan.competencyAddress,
                plan.competencyCluster,
                plan.actionPlan,
                plan.intervention,
                plan.remarks
            ]);
    
            return plantData;
        }catch(error){
            throw new Error("Something Wrong with Plan Data");
        }
    }
}

module.exports = Plan;


// //Static create plan
// planSchema.statics.createPlan = async function(plan) {
//     //Validation
//     if (!plan.competencyAddress || !plan.competencyCluster || !plan.actionPlan || !plan.intervention) {
//         throw new Error('Something wrong with the data');
//     }

//     // Generate unique Plan_ID
//     const uniqueEDPID = await generateUniqueID(this, 'EDP_ID');


//     const planData = await this.create({
//         EDP_ID: uniqueEDPID,
//         Competency_Address: plan.competencyAddress,
//         Competency_Cluster: plan.competencyCluster,
//         Action_Plan: plan.actionPlan,
//         Intervention: plan.intervention,
//         Remarks: plan.remarks,
//     })

//     return planData;
// }


// module.exports = mongoose.model('Plan', planSchema);