import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Link to="/">Ecommers</Link>
      </div>

      <div>
        <Link to="/cart">Cart </Link>
      </div>
    </div>
  );
};

export default Header;
