import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../features/quotes/quotesSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export const store = configureStore({
    reducer: {
        quotes: quotesReducer,
        favorites: favoritesReducer,
    },
});

export default store;
