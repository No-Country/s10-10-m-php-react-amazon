import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    fullname: "",
    lastname: '',
    email: "",
    address: '',
    latitude: -31.444961,
    longitude: -64.1850551,
    token: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {name, email, coordinates, address} = action.payload
            state.name = name
            state.email = email
            state.address = address
            state.coordinates = coordinates
        },
        setToken: (state, action) => {
            state.token = action.payload.token
        }

    }
})

export const {setUser, setToken} = userSlice.actions
export default userSlice.reducer
