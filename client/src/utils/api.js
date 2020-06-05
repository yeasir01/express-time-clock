import axios from "axios";

export default {
  registerUser: (data) => {
    return axios.post("/api/register", data);
  },
  authenticateUser: (data) => {
    return axios.post("/api/auth", data);
  },
  getUserData: (header) =>{
    return axios.get('/api/auth/user', header)
  }
};