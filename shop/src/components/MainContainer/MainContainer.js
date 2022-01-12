import React, { useEffect } from "react";
import "./MainContainer.css";

import { useDispatch } from "react-redux";

import { fetchAsyncProducts } from "../../features/productSlice";
import { fetchAsyncCategory } from "../../features/catogerySlice";
import ProductList from "../ProductList/ProductList";
const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProducts());
    dispatch(fetchAsyncCategory());
  }, [dispatch]);
  return (
    <div className="productslist-container">
      <ProductList />
    </div>
  );
};

export default MainContainer;
