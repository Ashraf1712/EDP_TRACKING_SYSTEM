// services/statusService.js
import axios from 'axios';

const getStatusData = async () => {
    const response = await axios.get('/api/status/getStatus');
    return response.data;
};

const createStatusData = async (status) => {
    await axios.post('/api/status/createStatus', status);
};

export { getStatusData, createStatusData };
