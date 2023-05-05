import { useState } from "react";

import React from "react";
import "./Hamburger.css";

function Hamburger() {
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuClick() {
    setMenuActive(!menuActive);
  }

  return (
    <div className="ham">
      <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={handleMenuClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`menu ${menuActive ? "active" : ""}`}>
        <li onClick={handleMenuClick}>
          <a href="#home" >Home</a>
        </li>
        <li onClick={handleMenuClick}>
          <a href="#about">About Us</a>
        </li>
        <li onClick={handleMenuClick}>
          <a href="#teams">Teams</a>
        </li>
        <li onClick={handleMenuClick}>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Hamburger;
