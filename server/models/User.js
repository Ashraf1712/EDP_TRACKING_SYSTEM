const bcrypt = require('bcryptjs');
const validator = require('validator');
const db = require('../config/db');


class User {
    static async login(email, password) {
        try {
            if (!email || !password) {
                throw new Error('All fields must be filled');
            }
            if (!validator.isEmail(email)) {
                throw new Error('Email is not valid');
            }

            const [user] = await db.promise().query(`
            SELECT 
            s.*,
            d.department,
            c.category,
            sec.section

            FROM staff s

            INNER JOIN department d ON d.department_id = s.department_id
            INNER JOIN category c ON c.category_id = s.category_id
            INNER JOIN section sec ON sec.section_id = s.section_id

            WHERE s.staff_email = ? `, [email]);

            if (!user) {
                throw new Error('User not found');
            }

            const isMatch = await bcrypt.compare(password, user[0].staff_password);
            if (!isMatch) {
                throw new Error('Incorrect password');
            }

            return {
                staff_id: user[0].staff_id,
                staff_email: user[0].staff_email,
                staff_name: user[0].staff_name,
                staff_reportedto: user[0].staff_reportedto,
                staff_roles: user[0].staff_roles,
                department: user[0].department,
                category: user[0].category,
                section: user[0].section
            };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = User;