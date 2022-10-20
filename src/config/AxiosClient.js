import axios from "axios";

const axiosClient = axios.create({
   // baseURL: 'http://localhost:4400'
   baseURL: 'https://colegio-backend-orm.onrender.com'
});

export default axiosClient;