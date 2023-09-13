import axios from "axios";

const BASE_URL =
  "https://s10-10-m-php-react-amazon-production.up.railway.app/api/users";

export const getAllUsers = () => {
  const response = axios.get(`${BASE_URL}/all`);
  console.log(response.data)
  return response
};

export const getUserById = (userId, token) => {
  return axios.get(`${BASE_URL}/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};

export const updateUser = (userId, newData, token) => {
  return axios.patch(`${BASE_URL}/${userId}`, newData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addPhoto = async (selectedFile, token) => {
  try {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await axios.post(`${BASE_URL}/avatar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("File uploaded successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}






