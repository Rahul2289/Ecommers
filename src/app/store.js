import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import categoryReducer from "../features/catogerySlice";
import detailsReducer from "../features/ProductDetailsSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categorys: categoryReducer,
    details: detailsReducer,
    cart: cartReducer,
  },
});
