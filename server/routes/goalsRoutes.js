const express = require('express');
const router = express.Router();

//controller functions
const {
    createGoalsData,
    getGoalsData,
} = require('../controllers/goalsController.js')

//goals module
router.post('/createGoals', createGoalsData)
router.get('/getGoalsByEmail/:staffEmail', getGoalsData)

module.exports = router;