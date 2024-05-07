const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});
db.getConnection((err, connection) => {
	if (err) {
		console.error("Error connecting to database: " + err.stack);
		return;
	}
	console.log("Connected to database");
});

module.exports = db;
