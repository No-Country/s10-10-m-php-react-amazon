import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import cartSlice from '../features/cartSlice';
import businessInfoSlice from "../features/businessSlice"
import quantitySlice from '../features/quantitySlice';
import itemSlice from '../features/itemSlice';

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

const persistedUserReducer = persistReducer(userPersistConfig, userSlice);
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

const rootReducer = {
    user: persistedUserReducer,
    cart: persistedCartReducer,
    businessInfo: businessInfoSlice,
    quantity: quantitySlice,
    item: itemSlice
};

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);