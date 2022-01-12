import React from "react";
import "./ProductCard.css";
const ProductCard = ({ data }) => {
  return (
    <div className="Product-item">
      <div className="Product-inner">
        <div className="Product-top">
          <img className="img" src={data.image} alt={data.title} />
        </div>
        <div className="Product-bottom">
          <div className="info">
            <h4 className="title">{data.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
