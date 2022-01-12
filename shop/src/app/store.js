import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import categoryReducer from "../features/catogerySlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    categorys: categoryReducer,
  },
});
