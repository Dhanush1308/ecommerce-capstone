import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-capstone-fcnu.onrender.com/api",
});

export default API;