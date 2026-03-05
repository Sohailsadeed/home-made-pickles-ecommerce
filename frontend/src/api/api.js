import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productApi = {
    getAll: (category) => api.get('/products', { params: { category } }),
    getById: (id) => api.get(`/products/${id}`),
};

export const userApi = {
    register: (userData) => api.post('/users/register', userData),
    login: (credentials) => api.post('/users/login', credentials),
    getProfile: (id) => api.get(`/users/${id}`),
};

export const orderApi = {
    place: (orderData) => api.post('/orders', orderData),
    getByUser: (userId) => api.get(`/orders/user/${userId}`),
};

export const subscriptionApi = {
    subscribe: (subData) => api.post('/subscriptions', subData),
    getByUser: (userId) => api.get(`/subscriptions/user/${userId}`),
    cancel: (id) => api.delete(`/subscriptions/${id}`),
};

export default api;
