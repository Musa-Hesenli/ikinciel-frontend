import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// Base URL for all API requests
const BASE_URL = 'https://ikinci.musahesenli.com/api/';

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Enable sending cookies with requests
});

// Request interceptor - Cookies are automatically sent with withCredentials: true
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // No need to manually add token - cookies are sent automatically
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle common errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Return successful response
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh the token (cookies are sent automatically)
        await axios.post(`${BASE_URL}auth/refresh`, {}, {
          withCredentials: true,
        });

        // Retry the original request (new cookie will be sent automatically)
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Refresh failed - redirect to login
        if (typeof window !== 'undefined') {
          localStorage.removeItem('user');
          window.location.href = '/auth/login';
        }
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    if (error.response) {
      // Server responded with error status
      const message = error.response.data || 'Bir xəta baş verdi';
      return Promise.reject({
        status: error.response.status,
        message,
        data: error.response.data,
      });
    } else if (error.request) {
      // Request made but no response received
      return Promise.reject({
        message: 'Serverə qoşulmaq mümkün olmadı',
      });
    } else {
      // Error setting up the request
      return Promise.reject({
        message: error.message || 'Bir xəta baş verdi',
      });
    }
  }
);

export default axiosInstance;
