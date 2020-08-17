import axios from "axios";

const baseURL = process.env.REACT_APP_API_HOST;

const axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance;
