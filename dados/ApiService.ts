import axios, {AxiosInstance} from "axios";

const endereco = 'https://1c6e-45-191-205-161.ngrok-free.app'

const api: AxiosInstance = axios.create({
    baseURL: endereco,
    timeout: 5000, // Tempo limite de 5 segundos
});

export default api;