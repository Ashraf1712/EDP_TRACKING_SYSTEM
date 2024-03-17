const Status = require('../models/Status');

//Status
const createStatusData = async(req, res) => {
    const status = req.body;

    try {
        const statusData = await Status.createStatus(status)
        res.status(200).json({ statusData })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = {
    createStatusData,
}