import axios from "axios";

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});

export const authenticatedRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }
});