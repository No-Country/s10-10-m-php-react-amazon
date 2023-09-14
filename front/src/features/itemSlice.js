import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload;
        },
    },
});

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;