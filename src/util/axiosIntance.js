import axios from "axios";

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.response.use((response) => response, (error) => {
  console.log(error);
})

export const authenticatedRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
  }
});

authenticatedRequest.interceptors.response.use((response) => response, (error) => {
  console.log(error);
})