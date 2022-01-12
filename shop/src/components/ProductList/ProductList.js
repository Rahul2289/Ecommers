import React from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../features/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
const ProductList = () => {
  const allProducts = useSelector(getAllProducts);
  console.log(allProducts);
  return (
    <div div className="product-container">
      {allProducts.map((prod, index) => (
        <ProductCard key={index} data={prod} />
      ))}
    </div>
  );
};

export default ProductList;
