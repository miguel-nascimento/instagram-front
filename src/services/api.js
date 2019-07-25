import axios from "axios";

const api = axios.create({
  baseURL: "https://instagram-back.herokuapp.com"
});

export default api;
