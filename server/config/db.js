const mysql = require('mysql2');


const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'edpdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
db.getConnection(() => {
    console.log('Connected to database')
})

module.exports = db;