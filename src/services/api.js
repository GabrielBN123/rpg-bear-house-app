import axios from "axios";

const api = axios.create({
    baseURL: "http://172.26.59.1:8000/api"
});

export default api;