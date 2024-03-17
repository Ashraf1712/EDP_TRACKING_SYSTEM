const { generateUniqueID } = require('../utils/utils');
const db = require('../config/db');

class EDP{
    static async createEDP({ staffEmail }) {
        //Validation
        if(!staffEmail){
            throw new Error('Something wrong with the data');
        }
        try{
            const uniqueEDPID = await generateUniqueID(db, 'edp_id','edp');
            console.log(uniqueEDPID);
            const edpData = await db.promise().query('INSERT INTO edp (edp_id,created_by,updated_by) VALUES (?,?,?)', [uniqueEDPID,staffEmail,staffEmail]);
            return edpData;
        }catch(error){
            throw new Error(error.message);
        }
    }

    static async getEDPByEmail({ staffEmail }) {
        if(!staffEmail){
            throw new Error('Something wrong with the data');
        }
        try{
            const [rows] = await db.promise().query(`
                SELECT 
                    edp.edp_id,
                    edp.updated_by,
                    goals.goals_longterm, 
                    goals.goals_shortterm, 
                    plan.competency_address, 
                    plan.competency_cluster, 
                    plan.action_plan, 
                    plan.intervention, 
                    plan.remarks, 
                    status.status, 
                    status.due_date, 
                    status.date_agreement, 
                    status.date_review
                FROM 
                    edp
                    LEFT JOIN goals ON edp.edp_id = goals.edp_id
                    LEFT JOIN plan ON edp.edp_id = plan.edp_id
                    LEFT JOIN status ON edp.edp_id = status.edp_id
                WHERE 
                    edp.created_by = ?
            `, [staffEmail]);
    
            // Format the data as needed
            const formattedGoals = rows.map(row => ({
                edpID: row.edp_id,
                updated_by: row.updated_by,
                goalsLongterm: row.goals_longterm,
                goalsShortterm: row.goals_shortterm,
                competencyAddress: row.competency_address,
                competencyCluster: row.competency_cluster,
                actionPlan: row.action_plan,
                intervention: row.intervention,
                remarks: row.remarks,
                status: row.status,
                dueDate: row.due_date,
                dateAgreement: row.date_agreement,
                dateReview: row.date_review
            }));
    
            return formattedGoals;
        
        }catch(error){
            throw new Error(error.message);
        }
    }

    static async getEDPByID({ edpID }) {
        if(!edpID){
            throw new Error('Something wrong with the data');
        }
        try{
            const [rows] = await db.promise().query(`
                SELECT 
                    edp.*,
                    goals.goals_longterm, 
                    goals.goals_shortterm, 
                    plan.competency_address, 
                    plan.competency_cluster, 
                    plan.action_plan, 
                    plan.intervention, 
                    plan.remarks, 
                    status.status, 
                    status.due_date, 
                    status.date_agreement, 
                    status.date_review
                FROM 
                    edp
                    LEFT JOIN goals ON edp.edp_id = goals.edp_id
                    LEFT JOIN plan ON edp.edp_id = plan.edp_id
                    LEFT JOIN status ON edp.edp_id = status.edp_id
                WHERE 
                    edp.edp_id = ?
            `, [edpID]);
    
            if (rows.length === 0) {
                return null;
            }
            
            //Get Only first row
            const row = rows[0];
    
            const formattedGoals = {
                edpID: row.edp_id,
                created_by: row.created_by,
                created_at: row.created_at,
                updated_by: row.updated_by,
                updated_at: row.updated_at,
                goalsLongterm: row.goals_longterm,
                goalsShortterm: row.goals_shortterm,
                competencyAddress: row.competency_address,
                competencyCluster: row.competency_cluster,
                actionPlan: row.action_plan,
                intervention: row.intervention,
                remarks: row.remarks,
                status: row.status,
                dueDate: row.due_date,
                dateAgreement: row.date_agreement,
                dateReview: row.date_review
            };
    
            return formattedGoals;
        
        }catch(error){
            throw new Error(error.message);
        }
    }

    static async updateEDPDetails( edpID, updatedData){
        if(!edpID || !updatedData){
            throw new Error('Something wrong with the data');
        }

        try{
            await db.promise().query(`
            UPDATE edp 
            SET updated_by = ?, updated_at = NOW()
            WHERE edp_id = ?
        `, [updatedData.staffEmail, edpID]);


            await db.promise().query(`
            UPDATE goals 
            SET goals_longterm = ?, goals_shortterm = ?
            WHERE edp_id = ?
        `, [updatedData.goalLongterm, updatedData.goalShortterm, edpID]);
    
            
            await db.promise().query(`
                UPDATE plan 
                SET competency_address = ?, competency_cluster = ?, action_plan = ?, intervention = ?, remarks = ?
                WHERE edp_id = ?
            `, [updatedData.competencyAddress, updatedData.competencyCluster, updatedData.actionPlan, updatedData.intervention, updatedData.remarks, edpID]);


            await db.promise().query(`
                UPDATE status 
                SET status = ?, 
                due_date = ?, 
                date_agreement = IFNULL(?, NULL), 
                date_review = IFNULL(?, NULL)

                WHERE edp_id = ?
            `, [updatedData.status, updatedData.dueDate, updatedData.date_agreement, updatedData.date_review, edpID]);

            return true;
        }catch(error){
            console.error('Failed to update data:', error);
            return false;
        }
    }

    static async deleteEDPByID({ edpID }) {
        if (!edpID) {
            throw new Error('Invalid edpID');
        }
    
        try {
            // Delete related rows in the child tables first
            await db.promise().query('DELETE FROM goals WHERE edp_id = ?', [edpID]);
            await db.promise().query('DELETE FROM plan WHERE edp_id = ?', [edpID]);
            await db.promise().query('DELETE FROM status WHERE edp_id = ?', [edpID]);
    
            // Then, delete the edp row
            await db.promise().query('DELETE FROM edp WHERE edp_id = ?', [edpID]);

            return true;
        } catch (error) {
            console.error('Failed to delete data:', error);
            return false;
        }
    }
    
}

module.exports = EDP;




