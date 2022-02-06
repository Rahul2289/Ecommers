import React from "react";
import "./QuantityBtn.css";
const QuantityBtn = ({ count, setCount }) => {
  const increment = () => {
    if (count >= 10) return;
    const NewCount = count + 1;
    setCount(NewCount);
  };
  const decrement = () => {
    if (count <= 1) return;
    const NewCount = count - 1;
    setCount(NewCount);
  };
  return (
    <div className="btn-container2">
      <button className="button2" onClick={decrement}>
        -
      </button>
      <p>{count}</p>
      <button className="button2" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityBtn;
