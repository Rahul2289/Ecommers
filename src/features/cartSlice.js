import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: (state, { payload }) => {
      state.cartItems = payload;
    },
  },
});

export const { addItemsToCart } = cartSlice.actions;
export const getAllCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
