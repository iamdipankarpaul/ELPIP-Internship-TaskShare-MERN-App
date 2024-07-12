import axios from "axios";

// Localhost: http://localhost:5000
// Render: https://elpip-internship-taskshare-mern-app.onrender.com

const api = axios.create({
  baseURL: "https://elpip-internship-taskshare-mern-app.onrender.com",
  withCredentials: true,
});

export default api;
