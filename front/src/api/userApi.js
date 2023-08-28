import axios from 'axios';

const BASE_URL = 'https://s10-10-m-php-react-amazon-production.up.railway.app/api/users';

export const getAllUsers = () => {
  return axios.get(`${BASE_URL}/all`);
};

export const getUserById = (userId) => {
  return axios.get(`${BASE_URL}/${userId}`);
};

export const updateUser = (userId, newData) => {
  return axios.patch(`${BASE_URL}/${userId}`, newData);
};
