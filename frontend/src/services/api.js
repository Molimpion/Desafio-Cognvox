import axios from "axios";

const api = axios.create({
  baseURL: "http://local.cognvox.net/api",
  timeout: 10000,
});

export default api;
