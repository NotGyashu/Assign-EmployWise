// src/api/authApi.js
import axios from 'axios';
import { toast } from 'react-toastify';

const authApi = axios.create({
  baseURL: 'https://reqres.in/api',
});

// Request interceptor
authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error('Session expired, please login again');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const loginUser = async (credentials) => {
  try {
    const response = await authApi.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Login failed';
  }
};

export default authApi;