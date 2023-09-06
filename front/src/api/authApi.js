import axios from 'axios';

const BASE_URL = 'https://s10-10-m-php-react-amazon-production.up.railway.app/api/auth';

export const loginUser = (email, password) => {
  const data = { email, password };
  return axios.post(`${BASE_URL}/login`, data);
};

export const signUpUser = (userData) => {
  return axios.post(`${BASE_URL}/register`, userData);
};

export const signUpShop = (shopData) => {
  return axios.post(`${BASE_URL}/register`, shopData)
}