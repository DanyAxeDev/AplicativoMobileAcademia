import axios, {AxiosInstance} from "axios";

const endereco = 'https://9f85-177-135-251-218.ngrok-free.app'

const api: AxiosInstance = axios.create({
    baseURL: endereco,
    timeout: 5000, // Tempo limite de 5 segundos
});

export default api;