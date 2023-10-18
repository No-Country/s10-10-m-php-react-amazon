import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    purchaseId: 0,
}

export const purchaseidSlice = createSlice({
    name: 'purchaseId',
    initialState,
    reducers: {
        setPurchaseId: (state, action) => {
            state.purchaseId = action.payload;
        },

    },
});

export const { setPurchaseId } = purchaseidSlice.actions;
export default purchaseidSlice.reducer;