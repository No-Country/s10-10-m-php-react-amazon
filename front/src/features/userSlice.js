import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: "",
  id: "",
  name: "",
  lastname: "",
  email: "",
  address: "",
  location: {
    address: "",
    city: "",
    postal_code: "",
    province: "",
    latitude: -31.444961,
    longitude: -64.1850551,
  },
  token: "",
  type: "",
  category: "",
  description: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token
    },
    setUser: (state, action) => {
      const { name, email, lastname, id, type } = action.payload.user;
      const { address, city, postal_code, province, latitude, longitude } =
        action.payload.user.location;
      state.token = action.payload.token;
      state.type = type
      state.id = id;
      state.name = name;
      state.lastname = lastname;
      state.email = email;
      state.location.address = address;
      state.location.city = city;
      state.location.postal_code = postal_code;
      state.location.province = province;
      state.location.latitude = latitude;
      state.location.longitude = longitude;
    },
    cerrarSesion: (state) => {
      state.email = ""
      state.id = ""
      state.location.address = ""
      state.name = ""
      state.location.city = ""
      state.location.postal_code = ""
      state.location.province = ""
      state.latitude = ""
      state.longitude = ""
      state.postalCode = ""
      state.token = ""
  },
  },
});

export const { setUser, setToken, cerrarSesion } = userSlice.actions;
export default userSlice.reducer;
