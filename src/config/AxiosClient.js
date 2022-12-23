import axios from "axios";

 //baseURL: 'http://localhost:4400'
const axiosClient = axios.create({
   baseURL: 'https://colegio-backend-orm.onrender.com'
});

export default axiosClient;