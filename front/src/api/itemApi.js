import axios from "axios";
import { getUserById } from "./userApi";

const BASE_URL =
  "https://s10-10-m-php-react-amazon-production.up.railway.app/api/pack";

export const postPack = (pack, token) => {
  return axios.post(
    `${BASE_URL}`,
    pack,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const getAllPacks = () => {
  return axios.get(`${BASE_URL}`)
}
export const getPacksByFilters = (filters, token) => {
  return axios.post(`${BASE_URL}/filter`, filters, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}


export const getPackById = async (id, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/collection/${id}`);
    const products = response.data["Packs available"];
    const product = products.find(item => item.id == id);
    const userResponse = await getUserById(product.user_id, token);
    product.shop = { ...userResponse.data };
    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getShopPacks = (id) => {
  return axios.get(`${BASE_URL}/collection/${id}`)


}
