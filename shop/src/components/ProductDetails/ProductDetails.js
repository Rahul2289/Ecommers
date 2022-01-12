import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./productDetail.css";
import {
  fetchAsyncDetails,
  getAllDetails,
} from "./../../features/ProductDetailsSlice";
import Loading from "./../Loading/Loading";
import { removeSelectedProductDetails } from "../../features/ProductDetailsSlice";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllDetails);
  useEffect(() => {
    dispatch(fetchAsyncDetails(id));
    return () => {
      dispatch(removeSelectedProductDetails());
    };
  }, [dispatch, id]);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loading />
      ) : (
        <div className="product-detail-container">
          <div className="Left-side">
            <div>
              <img
                src={data.image}
                alt={data.title}
                className="img-details"
              ></img>
            </div>
          </div>
          <div className="right-side">
            <div className="info">
              <h3 style={{ fontSize: "18px", padding: "10px" }}>
                {data.title}
              </h3>
              <h3 style={{ fontSize: "20px", padding: "10px" }}>
                ₹{data.price}
              </h3>
              <h4 style={{ fontSize: "14px", padding: "10px" }}>
                {" "}
                Rating {data.rating.rate}
              </h4>
              <p style={{ fontSize: "15px", padding: "10px" }}>
                {data.description}
              </p>
            </div>
            <div className="btn-container2">
              <button className="button2">-</button>
              <p>0</p>
              <button className="button2">+</button>
            </div>
            <div className="btn-container1">
              <button className="button">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
