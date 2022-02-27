import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_ADDRESS_BACKEND,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

export default axiosClient;
