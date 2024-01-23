const express = require('express');
const router = express.Router();

//controller functions
const {
    createPlanData,
    getPlanData
} = require('../controllers/planController.js')

//plan module
router.post('/createPlan', createPlanData)
router.get('/getPlan/:goalsID', getPlanData)

module.exports = router;