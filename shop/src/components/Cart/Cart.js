import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import { getAllCartItems } from "./../../features/cartSlice";
import QuantityBtn from "./../QuantityBtn/QuantityBtn";

const Cart = () => {
  const [count, setCount] = useState(1);
  const data = useSelector(getAllCartItems);
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className="Cart-Container">
          <h2>Shopping Cart</h2>
          <h2 style={{ color: "green" }}>Cart is empty</h2>
        </div>
      ) : (
        <div className="Cart-Container">
          <h2>Shopping Cart</h2>
          <div className="titles">
            <h3 className="product-title">product</h3>
            <h3 className="">price</h3>
            <h3 className="">Quantity</h3>
            <h3 className="total">total</h3>
          </div>
          <div className="cart-itemss">
            <div className="cart-item">
              <div className="cart-product">
                <img src={data.image} alt={data.title} />
                <div className="">
                  <h3>{data.title}</h3>
                </div>
              </div>
              <div className="cart-product-price">₹{data.price}</div>
              <div className="cart-product-quantity">
                <QuantityBtn count={count} setCount={setCount} />
              </div>
              <div className="cart-product-total-price">
                ₹{data.price * count}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
