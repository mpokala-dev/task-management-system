import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';
import { STORAGE_KEYS } from '@/constants/storage';
import { API_ERROR_MESSAGES } from '@/constants/messages';
import { HTTP_STATUS_CODES } from '@/constants/api';

const axiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(new Error(API_ERROR_MESSAGES.NETWORK));
    }
    const { status } = error.response;
    switch (status) {
      case HTTP_STATUS_CODES.UNAUTHORIZED:
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        error.message = API_ERROR_MESSAGES.UNAUTHORIZED;
        break;
      case HTTP_STATUS_CODES.FORBIDDEN:
        error.message = API_ERROR_MESSAGES.FORBIDDEN;
        break;
      case HTTP_STATUS_CODES.NOT_FOUND:
        error.message = API_ERROR_MESSAGES.NOT_FOUND;
        break;
      case HTTP_STATUS_CODES.SERVER_ERROR:
        error.message = API_ERROR_MESSAGES.SERVER_ERROR;
        break;
      default:
        error.message = API_ERROR_MESSAGES.DEFAULT;
        break;
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
