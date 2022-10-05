import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:4400'
});

export default axiosClient;