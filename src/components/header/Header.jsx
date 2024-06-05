import React from "react";
import "../header/Header.css";
import Logo from "../../assets/planity.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img src={Logo} alt="Logo" />
        <p>Planity.</p>
      </div>
      <div className="headerMiddle">
        <ul>
          <li>HOME</li>
          <li>SHOP</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="headerRight">
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Header;
