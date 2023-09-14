import axios from "axios";

const BASE_URL =
  "https://s10-10-m-php-react-amazon-production.up.railway.app/api";

export const getPurchasesByShopId = async (id, token) => {
    const response =  await axios.get(`${BASE_URL}/purchase`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const purchases = response.data.Purchases.filter(item => item.user_id == id)
    return purchases
  }