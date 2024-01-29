const express = require('express');
const router = express.Router();

//controller functions
const {
    createEDPData,
    getEDPData,
    updateEDPData,
} = require('../controllers/edpController.js')

//goals module
router.post('/createEDP/:staffEmail', createEDPData)
router.get('/getEDPByEmail/:staffEmail', getEDPData)
    // router.put('/updateEDP', updateEDPData)

module.exports = router;