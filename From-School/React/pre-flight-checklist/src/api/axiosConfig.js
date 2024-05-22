// src/api/axiosConfig.js

import axios from 'axios';

// URL de base de l'API
const BASE_URL = 'https://greenvelvet.alwaysdata.net/pfc/';

// Créer une instance Axios
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'token': '6fd4c879b87177f3ff643c90c64204bbd0760b2b'
    },
});

// Ajouter un interceptueur de requête pour inclure le token d'authentification
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token'); // Assurez-vous de stocker le token de manière sécurisée
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;