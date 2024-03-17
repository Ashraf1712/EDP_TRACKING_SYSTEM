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
    const edp = req.body;
    const { edpID } = req.params;
    try {
        const edpData = await EDP.updateEDPDetails(edpID, edp)
        if(edpData){
            // If the update is successful, retrieve the updated data
            const updatedEDPData = await EDP.getEDPByID({ edpID });
            res.status(200).json(updatedEDPData);
        }else{
            res.status(400).json({ error: 'Failed to update data' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteEDPData = async (req, res) => {
    const { edpID } = req.params;
    try {
        await EDP.deleteEDPByID({ edpID });
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createEDPData,
    getEDPDataByEmail,
    getEDPDataByID,
    updateEDPData,
    deleteEDPData
}