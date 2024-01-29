async function generateUniqueID(model, fieldName) {
    const existingDocuments = await model.find().sort({
        [fieldName]: -1
    }).limit(1);
    let lastID = existingDocuments.length > 0 ? existingDocuments[0][fieldName] : 'EDP-2024-0000';
    let [, year, lastNumber] = lastID.match(/(\d{4})-(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        year = (parseInt(year) + 1).toString();
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `EDP-${year}-${nextNumber}`;
}

module.exports = {
    generateUniqueID,
};