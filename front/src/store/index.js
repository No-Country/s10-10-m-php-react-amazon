import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const userPersistConfig = {
    key: 'user',
    storage,
    blacklist: [], 
};

const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

const rootReducer = {
    user: persistedUserReducer,
};
export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);