const Goals = require('../models/Goals');

//Goals
const createGoalsData = async(req, res) => {
    const { goals } = req.body;
    try {
        const goalsData = await Goals.createGoals(goals)
        res.status(200).json({ goalsData })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getGoalsData = async(req, res) => {
    const { staffEmail } = req.params;

    try {
        const goalsData = await Goals.getGoalsByEmail({ staffEmail })
        res.status(200).json(goalsData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createGoalsData,
    getGoalsData
}