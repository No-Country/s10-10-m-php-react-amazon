import axios from "axios";

const BASE_URL =
  "https://s10-10-m-php-react-amazon-production.up.railway.app/api/pack";

export const postPack = (pack, token) => {
  return axios.post(
    `${BASE_URL}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    pack
  );
};
