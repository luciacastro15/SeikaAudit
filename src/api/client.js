//define donde esta el back (l3), añade automaticamente el token del usuario logeado, evita reptir codigo en cada llamada a la api desde react

const API_URL = import.meta.env.VITE_API_URL;
import axios from 'axios';

const client = axios.create({
    baseURL: API_URL,
    
});
client.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default client;