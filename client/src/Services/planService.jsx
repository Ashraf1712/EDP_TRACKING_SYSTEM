// services/planService.js
import axios from 'axios';

const getPlanData = async () => {
    const response = await axios.get('/api/plan/getPlan');
    return response.data;
};

const createPlanData = async (plan) => {
    await axios.post('/api/plan/createPlan', plan);
};

export { getPlanData, createPlanData };
