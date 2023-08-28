import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: "",
    url: "",
    price: 0,

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const {name, url, price} = action.payload
            state.name = name
            state.url = url
            state.price = price
        }

    }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer
