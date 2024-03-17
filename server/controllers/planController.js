const Plan = require('../models/Plan');
//Plan
const createPlanData = async(req, res) => {
    const { plan } = req.body;

    try {
        const planData = await Plan.createPlan(plan)
        res.status(200).json({ planData })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createPlanData,
}