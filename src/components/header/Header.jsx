import React from "react";
import "./header.css";
const Header = () => {
  return (
    <nav className="header">
      <h5>Trending Blog</h5>
      <div className="link">
        {/* <a>Login</a>
        <a>Contact</a>
        <a>Cart</a> */}
        <img
          style={{ width: "60px", height: "60px" }}
          src="https://cpng.pikpng.com/pngl/s/159-1591559_flat-faces-icons-circle-girl-flat-icon-png.png"
        ></img>
      </div>
    </nav>
  );
};

export default Header;
