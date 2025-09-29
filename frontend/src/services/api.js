import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wellhome-properties.onrender.com/api',
});

export const getProperties = () => api.get('/properties');
export const createProperty = (property) => api.post('/properties', property);
export const updateProperty = (id, property) => api.put(`/properties/${id}`, property);
export const deleteProperty = (id) => api.delete(`/properties/${id}`);

export default api;