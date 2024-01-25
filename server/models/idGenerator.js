// Helper function to generate a unique Plan_ID
async function generateUniquePlanID() {
    const existingPlans = await this.find().sort({ Plan_ID: -1 }).limit(1);
    let lastPlanID = existingPlans.length > 0 ? existingPlans[0].Plan_ID : 'PLN-0000';
    let [, lastNumber] = lastPlanID.match(/(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `PLN-${nextNumber}`;
}

// Define the generateUniqueGoalsID function
async function generateUniqueGoalsID() {
    const existingGoals = await this.find().sort({ Goals_ID: -1 }).limit(1);
    let lastGoalsID = existingGoals.length > 0 ? existingGoals[0].Goals_ID : 'GLS/2024/0000';
    let [, year, lastNumber] = lastGoalsID.match(/(\d{4})\/(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        year = (parseInt(year) + 1).toString();
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `GLS/${year}/${nextNumber}`;
}

// Helper function to generate a unique Status_ID
async function generateUniqueStatusID() {
    const existingStatuses = await this.find().sort({ Status_ID: -1 }).limit(1);
    let lastStatusID = existingStatuses.length > 0 ? existingStatuses[0].Status_ID : 'STS-0000';
    let [, lastNumber] = lastStatusID.match(/(\d+)/);

    if (parseInt(lastNumber) === 9999) {
        lastNumber = '0000';
    }

    const nextNumber = (parseInt(lastNumber) + 1).toString().padStart(4, '0');
    return `STS-${nextNumber}`;
}

module.exports = { generateUniqueGoalsID, generateUniquePlanID, generateUniqueStatusID };