import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, price, amount } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.name === name);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].amount += amount;
      } else {
        state.items.push({ name, price, amount });
      }
    },
    removeFromCart: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
