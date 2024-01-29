const EDP = require('../models/EDP');

//Goals
const createEDPData = async(req, res) => {
    const { staffEmail } = req.body;
    try {
        const edpData = await EDP.createEDP({ staffEmail })
        res.status(200).json(edpData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getEDPData = async(req, res) => {
    const { staffEmail } = req.params;
    try {
        const edpData = await EDP.getEDPByEmail({ staffEmail })
        res.status(200).json(edpData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateEDPData = async(req, res) => {
    const { edp } = req.body;
    try {
        const edpData = await EDP.updateEDPByID(edp)
        res.status(200).json(edpData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createEDPData,
    getEDPData,
    updateEDPData
}