const express = require('express');
const router = express.Router();

//controller functions
const {
    createGoalsData,
    getGoalsData,
    createPlanData,
    getPlanData,
    createStatusData,
    getStatusData
} = require('../controllers/edpController.js')

//goals module
router.post('/createGoals', createGoalsData)
router.get('/getGoals', getGoalsData)


//plan module
router.post('/createPlan', createPlanData)
router.get('/getPlan', getPlanData)

//status module
router.post('/createStatus', createStatusData)
router.get('/getStatus', getStatusData)

module.exports = router;