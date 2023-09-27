import Axios from "axios";

export const api = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
});

api.interceptors.request.use((config) => {
    if (!config.params) config.params = {};
    config.params.key = import.meta.env.VITE_API_KEY;
    return config;
});
