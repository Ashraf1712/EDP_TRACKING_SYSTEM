const bcrypt = require("bcryptjs");
const validator = require("validator");
const db = require("../config/db");

class User {
	static async login(email, password) {
		try {
			if (!email || !password) {
				throw new Error("All fields must be filled");
			}
			if (!validator.isEmail(email)) {
				throw new Error("Email is not valid");
			}

			const [user] = await db.promise().query(
				`
            SELECT 
            s.*,
            d.department,
            c.category,
            sec.section

            FROM staff s

            INNER JOIN department d ON d.department_id = s.department_id
            INNER JOIN category c ON c.category_id = s.category_id
            INNER JOIN section sec ON sec.section_id = s.section_id

            WHERE s.staff_email = ? `,
				[email],
			);

			if (!user) {
				throw new Error("User not found");
			}

			const isMatch = await bcrypt.compare(password, user[0].staff_password);
			if (!isMatch) {
				throw new Error("Incorrect password");
			}

			return {
				staff_id: user[0].staff_id,
				staff_email: user[0].staff_email,
				staff_name: user[0].staff_name,
				staff_reportedto: user[0].staff_reportedto,
				staff_roles: user[0].staff_roles,
				department: user[0].department,
				category: user[0].category,
				section: user[0].section,
			};
		} catch (error) {
			throw error;
		}
	}

	static async register(staff) {
		try {
			if (!staff.staffEmail || !staff.staffPassword) {
				throw new Error("All field must be filled");
			}
			if (!validator.isEmail(staff.staffEmail)) {
				throw new Error("Email is not valid");
			}
			if (!validator.isStrongPassword(staff.staffPassword)) {
				throw new Error("Password is not strong enough");
			}

			// Check if user already exists
			const [existingUser] = await db
				.promise()
				.query("SELECT * FROM staff WHERE staff_email = ?", [staff.staffEmail]);
			if (existingUser.length > 0) {
				throw new Error("User already exists");
			}

			// Hash password
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(staff.staffPassword, salt);

			// Insert user into the database
			const [result] = await db
				.promise()
				.query(
					`INSERT INTO staff (staff_email, staff_password, staff_name, staff_reportedto, staff_roles, department_id, category_id, section_id) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)`,
					[
						staff.staffEmail,
						hash,
						staff.staffName,
						staff.staffReportedTo,
						staff.staffRoles,
						staff.departmentID,
						staff.categoryID,
						staff.sectionID,
					],
				);

			return true;
		} catch (error) {
			console.log("Something Wrong with the Registeration", error.message);
			return false;
		}
	}

	static async getAllCategory() {
		try {
			const [rows] = await db.promise().query("SELECT * FROM category");
			return rows.map((row) => {
				return {
					category_id: row.category_id,
					category: row.category.toString("utf8"), // Convert buffer to string
				};
			});
		} catch (error) {
			throw new Error(error.message);
		}
	}

	static async getAllSection() {
		try {
			const [rows] = await db.promise().query("SELECT * FROM section");
			return rows.map((row) => {
				return {
					section_id: row.section_id,
					section: row.section.toString("utf8"), // Convert buffer to string
				};
			});
		} catch (error) {
			throw new Error(error.message);
		}
	}

	//TODO:UPDATE USER PROFILE
}

module.exports = User;
