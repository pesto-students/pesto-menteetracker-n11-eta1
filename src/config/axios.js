import axios from "axios"

// const baseURL = "http://127.0.0.1:5000"
// const baseURL = "server-url"
// const baseURL = "https://pesto-mentee-tracker.herokuapp.com";
const baseURL = "https://pesto-nodejs.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
});

export default axiosInstance;
