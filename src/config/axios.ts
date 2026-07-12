// src/config/axios.ts
import axios from 'axios';
import { env } from '@/config/env';

const axiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
