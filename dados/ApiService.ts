import axios, {AxiosInstance} from "axios";

const endereco = 'https://51cd-177-135-251-218.ngrok.io'

const api:AxiosInstance = axios.create({
    baseURL: endereco
})

export default api;