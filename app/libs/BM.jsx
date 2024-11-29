// API Functions
export const fetchMorningTasks = async ({ queryKey }) => {
    const [, page, limit, search] = queryKey;

    // Simulate API call with axios
    const response = await axios.get('/api/morning-tasks', {
        params: {
            page,
            limit,
            search
        }
    });

    return response.data;
};

export const createMorningTask = async (newTask) => {
    const response = await axios.post('/api/morning-tasks', newTask);
    return response.data;
};

export const updateMorningTask = async ({ id, updatedTask }) => {
    const response = await axios.put(`/api/morning-tasks/${id}`, updatedTask);
    return response.data;
};

export const deleteMorningTask = async (taskId) => {
    const response = await axios.delete(`/api/morning-tasks/${taskId}`);
    return response.data;
};