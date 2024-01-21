const Goals = require('../models/Goals');
const Plan = require('../models/Plan');
const Status = require('../models/Status');
const jwt = require('jsonwebtoken');


//Goals
const createGoalsData = async(req, res) => {
    const { goals } = req.body;

    try {
        const goalsData = await Goals.createGoals(goals)
        res.status(200).json({ goalsData, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getGoalsData = async(req, res) => {
    const { goals } = req.body;

    try {
        const goalsData = await Goals.getGoalsByEmail(goals)
        res.status(200).json({ goalsData, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Plan
const createPlanData = async(req, res) => {
    const { plan } = req.body;

    try {
        const planData = await Plan.createPlan(plan)
        res.status(200).json({ planData, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getPlanData = async(req, res) => {
    const { plan } = req.body;

    try {
        const planData = await Plan.getPlanByGoalsID(plan)
        res.status(200).json({ planData, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Status
const createStatusData = async(req, res) => {
    const { status } = req.body;

    try {
        const statusData = await Status.createStatus(status)
        res.status(200).json({ statusData, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getStatusData = async(req, res) => {
    const { status } = req.body;

    try {
        const statusData = await Status.getStatusByGoalsID(status)
        res.status(200).json({ statusData, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    createGoalsData,
    getGoalsData,
    createPlanData,
    getPlanData,
    createStatusData,
    getStatusData
}