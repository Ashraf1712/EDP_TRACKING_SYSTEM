const { generateUniqueID } = require('../utils/utils');
const db = require('../config/db');

class Goals{
    static async createGoals(goals){
        console.log(goals);
        //Validation
        if(!goals){
            throw new Error('Something wrong with the data');
        }

        try{

            const uniqueEDPID = await generateUniqueID(db, 'edp_id','goals');
            const goalsData = await db.promise().query('INSERT INTO goals  (edp_id,goals_longterm,goals_shortterm) VALUES (?,?,?)', [uniqueEDPID,goals.goalsLongterm,goals.goalsShortterm]);
    
            return goalsData;
        }catch(error){
            throw new Error("Something Wrong with Goals Data");
        }
    }
}

module.exports = Goals;

