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

const getEDPDataByEmail = async(req, res) => {
    const { staffEmail } = req.params;
    try {
        const edpData = await EDP.getEDPByEmail({ staffEmail })
        res.status(200).json(edpData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getEDPDataByID = async(req, res) => {
    const { edpID } = req.params;
    try {
        const edpData = await EDP.getEDPByID({ edpID })
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

const deleteEDPData = async(req, res) => {
    const { edpID } = req.params;
    try {
        const edpData = await EDP.deleteEDPByID({ edpID })
        res.status(200).json(edpData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createEDPData,
    getEDPDataByEmail,
    getEDPDataByID,
    updateEDPData,
    deleteEDPData
}