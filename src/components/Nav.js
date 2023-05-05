import React from "react";
import "./Nav.css";
import logo from "../assets/ieee-logo.png";
import Hamburger from "./Hamburger";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-items" exact activeClassName="active-link">
        <div className="container">
          <a href="index.html">
            <img src={logo} alt="ieee-logo" className="nav-logo" />
          </a>
          <div className="nav-teams">
          <a href="#about" className="teamname">
              About Us
            </a>
            <a href="#teams" className="teamname">
              Teams
            </a>
            <a href="#contact" class="contact-button button">Contact Us</a>
          </div>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
