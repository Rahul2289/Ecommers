import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ShopApi from "./Api";

export const fetchAsyncDetails = createAsyncThunk(
  "details/fetchAsyncDetails",
  async (id) => {
    const response = await ShopApi.get(`products/${id}`);
    return response.data;
  }
);
const initialState = {
  details: {},
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    removeSelectedProductDetails: (state) => {
      state.details = initialState;
    },
  },
  extraReducers: {
    [fetchAsyncDetails.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, details: payload };
    },
    [fetchAsyncDetails.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const getAllDetails = (state) => state.details.details;
export const { removeSelectedProductDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
