import axios from "axios";

const BASE_URL =
  "https://s10-10-m-php-react-amazon-production.up.railway.app/api";

export const getPurchasesByShopId = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/purchase`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const purchases = response.data.Purchases.filter(
    (item) => item.seller_id == id
  );
  return purchases;
};

export const addPurchase = async (data, token) => {
  const response = await axios.post(
    `${BASE_URL}/purchase`,
    {
      pack_id: data.id,
      price: data.price,
      amount: data.amount,
      seller_id: data.seller_id,
      expiration_date: data.expiration_date,
      cvv: data.cvv,
      credit_card_number: data.credit_card_number,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const getPurchaseById = (token, id) => {
  const response = axios.get(`${BASE_URL}/purchase/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  );
  return response;
}

export const updatePurchase = (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  };

  return axios.put(`${BASE_URL}/purchase/update`, data, config);
}