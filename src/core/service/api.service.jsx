import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://172.16.1.95:8000/api/',
    headers: {
      'Content-Type': 'application/json',
    },
})

export default apiClient
  