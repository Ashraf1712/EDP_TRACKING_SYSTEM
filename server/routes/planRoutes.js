const express = require('express');
const router = express.Router();

//controller functions
const {
    createPlanData,
} = require('../controllers/planController.js')

//plan module
router.post('/createPlan', createPlanData)

module.exports = router;