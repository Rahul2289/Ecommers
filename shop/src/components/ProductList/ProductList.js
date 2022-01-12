import React from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../features/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import Loading from "./../Loading/Loading";
const ProductList = () => {
  const allProducts = useSelector(getAllProducts);
  console.log(allProducts);

  return (
    <div className="product-container">
      {Object.keys(allProducts).length === 0 ? (
        <Loading />
      ) : (
        allProducts.map((prod, index) => (
          <ProductCard key={index} data={prod} />
        ))
      )}
    </div>
  );
};

export default ProductList;
