import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../features/counter';
import wishlist from '../features/wishlist';
import cart from '../features/cart';

const wishlistPersistConfig = {
    key: 'wishlist',
    storage,
};
const cartPersistConfig = {
    key: 'cart',
    storage,
};
const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlist);
const persistedCartReducer = persistReducer(cartPersistConfig, cart);
const store = configureStore({
    reducer: {
        counter: counterReducer,
        wishlist: persistedWishlistReducer,
        cart: persistedCartReducer
    },
})

export const persistor = persistStore(store);
export default store;