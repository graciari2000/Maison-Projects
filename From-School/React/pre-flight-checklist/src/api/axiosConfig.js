import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://greenvelvet.alwaysdata.net/pfc',
    timeout: 1000, // Adjust timeout as needed
});

// Add request interceptor
instance.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        const token = localStorage.getItem('6fd4c879b87177f3ff643c90c64204bbd0760b2b');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add response interceptor
instance.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default instance;