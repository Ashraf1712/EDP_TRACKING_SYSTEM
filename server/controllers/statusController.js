const Status = require('../models/Status');

//Status
const createStatusData = async(req, res) => {
    const { status } = req.body;

    try {
        const statusData = await Status.createStatus(status)
        res.status(200).json({ statusData })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getStatusData = async(req, res) => {
    const { goalsID } = req.body;

    try {
        const statusData = await Status.getStatusByGoalsID(goalsID)
        res.status(200).json({ statusData })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    createStatusData,
    getStatusData
}