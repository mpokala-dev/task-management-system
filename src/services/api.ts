// src/services/api.ts
import axiosInstance from '@/config/axios';

export const api = {
  get: <T>(url: string) => axiosInstance.get<T>(url),
  post: <T>(url: string, data: unknown) => axiosInstance.post<T>(url, data),
  put: <T>(url: string, data: unknown) => axiosInstance.put<T>(url, data),
  delete: <T>(url: string) => axiosInstance.delete<T>(url),
};
