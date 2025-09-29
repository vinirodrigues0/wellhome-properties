import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getProperties = () => api.get('/properties');
export const createProperty = (property) => api.post('/properties', property);
export const updateProperty = (id, property) => api.put(`/properties/${id}`, property);
export const deleteProperty = (id) => api.delete(`/properties/${id}`);

export default api;