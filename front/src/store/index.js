import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import cartSlice from '../features/cartSlice';
import businessInfoSlice from "../features/businessSlice"
import quantitySlice from '../features/quantitySlice';
import itemSlice from '../features/itemSlice';
import purchaseidSlice from '../features/purchaseidSlice';

const userPersistConfig = {
    key: 'user',
    storage,
    blacklist: [],
};

const cartPersistConfig = {
    key: 'cart',
    storage,
    blacklist: [],
}

const itemPersistConfig = {
    key: 'item',
    storage,
    blacklist: []
}

const quantityPersistConfig = {
    key: 'quantity',
    storage,
    blacklist: []
}

const persistedUserReducer = persistReducer(userPersistConfig, userSlice);
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);
const persistedItemReducer = persistReducer(itemPersistConfig, itemSlice);
const persistedQuantityReducer = persistReducer(quantityPersistConfig, quantitySlice);

const rootReducer = {
    user: persistedUserReducer,
    cart: persistedCartReducer,
    businessInfo: businessInfoSlice,
    quantity: persistedQuantityReducer,
    item: persistedItemReducer,
    purchaseId: purchaseidSlice,
};

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);