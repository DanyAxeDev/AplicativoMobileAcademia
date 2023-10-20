import axios, {AxiosInstance} from "axios";

const endereco = 'https://deer-moving-sailfish.ngrok-free.app'

const api: AxiosInstance = axios.create({
    baseURL: endereco,
    timeout: 5000, // Tempo limite de 5 segundos
});

export default api;