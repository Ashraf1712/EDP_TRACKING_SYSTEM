const express = require('express');
const router = express.Router();

//controller functions
const {
    createEDPData,
    getEDPDataByEmail,
    getEDPDataByID,
    updateEDPData,
    deleteEDPData
} = require('../controllers/edpController.js')

//goals module
router.post('/createEDP', createEDPData)
router.get('/getEDPByEmail/:staffEmail', getEDPDataByEmail)
router.get('/getEDPByID/:edpID', getEDPDataByID)
router.put('/updateEDP', updateEDPData)
router.delete('/deleteEDPByID/:edpID', deleteEDPData)

module.exports = router;