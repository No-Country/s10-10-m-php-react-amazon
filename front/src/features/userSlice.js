import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    address: '',
    coordinates: {latitude: "", longitude: ""},

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
        }

    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer
