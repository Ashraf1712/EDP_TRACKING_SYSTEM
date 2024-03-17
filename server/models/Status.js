const mongoose = require('mongoose');
const { generateUniqueID } = require('../utils/utils');
const db = require('../config/db');


class Status {
    static async createStatus(status){
        //validation
        if(!status.status || !status.dueDate){
            throw new Error('Something wrong with status data');
        }
        console.log(status);

        try{
            //Generate Unique ID
            const uniqueEDPID = await generateUniqueID(db, 'edp_id','status');

            const statusData = await db.promise().query('INSERT INTO status (edp_id, status, due_date, date_agreement, date_review) VALUES (?,?,?,?,?)',[
                uniqueEDPID,
                status.status,
                status.dueDate,
                status.dateAgreement,
                status.dateReview
            ])

            return statusData;
    
        }catch(error){
            console.error('Error in createStatus:', error);
            throw new Error('Failed to create status');
        }
    } 
}

module.exports = Status;


// //Static create plan
// statusSchema.statics.createStatus = async function(status) {
//     //Validation
//     if (!status.status || !status.dueDate) {
//         throw new Error('Something wrong with the data');
//     }

//     const uniqueEDPID = await generateUniqueID(this, 'EDP_ID');

//     const statusData = await this.create({
//         Status: status.status,
//         Due_Date: status.dueDate,
//         Date_Agreement: status.dateAgreement,
//         Date_Review: status.dateReview,
//         EDP_ID: uniqueEDPID,
//     })

//     return statusData;
// }


// module.exports = mongoose.model('Status', statusSchema);