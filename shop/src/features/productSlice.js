import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ShopApi from "./Api";
export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await ShopApi.get(`/products`);
    return response.data;
  }
);

const initialState = {
  products: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, products: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      console.log("Rejected!");
    },
  },
});
export const { addProducts } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;

export default productSlice.reducer;
