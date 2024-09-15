import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../states/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
