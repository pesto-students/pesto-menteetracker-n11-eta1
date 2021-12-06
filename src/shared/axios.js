import axios from "axios"

const baseURL = "http://127.0.0.1:80"
// const baseURL = "server-url"

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
});

export default axiosInstance;
