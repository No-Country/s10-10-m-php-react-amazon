import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    quantity: 0,
}

export const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        },

    },
});

export const { setQuantity, setItem } = quantitySlice.actions;
export default quantitySlice.reducer;