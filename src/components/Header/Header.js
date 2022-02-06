import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { getAllCartItems } from "../../features/cartSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector(getAllCartItems);
  return (
    <div className="header-container">
      <div className="left-sides">
        <Link
          to="/Ecommers"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "21px",
            cursor: "pointer",
          }}
        >
          Ecommers
        </Link>
      </div>

      <div className="right-sides">
        <div>
          <Link
            to="cart"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            <Badge
              count={data.length}
              style={{
                color: "#87d068",
              }}
            >
              <ShoppingCartOutlined className="cart-icon" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
