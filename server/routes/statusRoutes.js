const express = require('express');
const router = express.Router();

//controller functions
const {
    createStatusData,
    getStatusData
} = require('../controllers/statusController.js')


//status module
router.post('/createStatus', createStatusData)
router.get('/getStatus', getStatusData)

module.exports = router;