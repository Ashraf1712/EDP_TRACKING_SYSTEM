const express = require('express');
const router = express.Router();

//controller functions
const {
    createGoalsData,
} = require('../controllers/goalsController.js')

//goals module
router.post('/createGoals', createGoalsData);

module.exports = router;