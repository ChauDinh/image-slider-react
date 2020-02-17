import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <p>Image Slider</p>
      </div>
      <div className="icons">
        <div className="avatar">
          <img
            src="https://api.adorable.io/avatars/40/abott@adorable.png"
            alt="avatar"
          />
        </div>
        <i className="fas fa-cog"></i>
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default Header;
