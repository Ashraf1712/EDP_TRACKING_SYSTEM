const express = require('express');
const router = express.Router();

//controller functions
const {
    createStatusData,
} = require('../controllers/statusController.js')


//status module
router.post('/createStatus', createStatusData)

module.exports = router;