import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ShopApi from "./Api";

export const fetchAsyncCategory = createAsyncThunk(
  "category/fetchAsyncCategory",
  async () => {
    const response = await ShopApi.get(`products/categories`);
    return response.data;
  }
);
const initialState = {
  categories: {},
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [fetchAsyncCategory.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncCategory.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, categories: payload };
    },
    [fetchAsyncCategory.rejected]: () => {
      console.log("Rejected!");
    },
    // [fetchAsyncProductsCategory.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, category: payload };
    // },
  },
});

export const getAllCategory = (state) => state.categories.categories;
// export const getAllCategory = (state) => state.products.category;
export default categorySlice.reducer;
