// services/goalsService.js
import axios from 'axios';

const getGoalsData = async (staffEmail) => {
    const response = await axios.get(`/api/goals/getGoals/${staffEmail}`);
    return response.data;
};

const createGoalsData = async (goals) => {
    await axios.post('/api/goals/createGoals', goals);
};

export { getGoalsData, createGoalsData };
