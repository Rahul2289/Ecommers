import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "21px",
          }}
        >
          Ecommers
        </Link>
      </div>

      <div>
        <Link
          to="cart"
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
        >
          Cart{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
