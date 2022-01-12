import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ data }) => {
  return (
    <div className="Product-item">
      <Link
        to={`product/${data.id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="Product-inner">
          <div className="Product-top">
            <img className="img" src={data.image} alt={data.title} />
          </div>
          <div className="Product-bottom">
            <div className="info" style={{ overFlow: "hidden" }}>
              <h4 className="title">{data.title}</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
