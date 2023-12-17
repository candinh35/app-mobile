import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://192.168.1.3:8000/api/',
    headers: {
      'Content-Type': 'application/json',
    },
})

export default apiClient
  