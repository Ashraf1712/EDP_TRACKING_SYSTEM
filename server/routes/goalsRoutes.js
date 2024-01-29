const express = require('express');
const router = express.Router();

//controller functions
const {
    createGoalsData,
    getGoalsData,
    updateGoalsData,
} = require('../controllers/goalsController.js')

//goals module
router.post('/createGoals', createGoalsData)
    // router.get('/getGoalsByEmail/:staffEmail', getGoalsData)
    // router.put('/updateGoals', updateGoalsData)

module.exports = router;