async function generateUniqueID(connection,fieldName,tableName) {
    try{
        const [rows] = await connection.promise().query(`SELECT ${fieldName} FROM ${tableName} ORDER BY ${fieldName} DESC LIMIT 1`);
        const lastID = rows.length > 0 ? rows[0][fieldName] : 'EDP-2024-0000';
        let [, year, lastNumber] = lastID.match(/(\d{4})-(\d+)/);
    
        if (parseInt(lastNumber) === 9999) {
            year = (parseInt(year) + 1).toString();
            lastNumber = '0000';
        }
    
        const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
        return `EDP-${year}-${nextNumber}`;
    } catch (error){
        throw new Error("Something Wrong With Generate Unique ID");
    }

}

module.exports = {
    generateUniqueID,
};