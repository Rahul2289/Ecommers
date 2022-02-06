import React from "react";
import "./Footer.css";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <FacebookOutlined className="icon facebook" />
          <TwitterOutlined className="icon twitter" />
          <InstagramOutlined className="icon instagram" />
        </div>
        <div>
          <h5 style={{ fontSize: "18px", fontWeight: "400" }}>
            made with{" "}
            <span style={{ color: "red", fontSize: "20px" }}>&hearts; </span>
            By Rahul
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
