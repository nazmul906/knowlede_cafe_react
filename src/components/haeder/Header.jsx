import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <h5>Knowledge Cafe</h5>
      <div className="link">
        <a>Login</a>
        <a>Contact</a>
        <a>Blog</a>
      </div>
    </div>
  );
};

export default Header;
