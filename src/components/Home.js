import React from "react";
import "./Home.css";
import hero_img from "../assets/hero-img.png";

function home() {
  return (
    <div className="home" id="home">
      <div className="hero-area">
        <img src={hero_img} alt="hero-image" className="hero-image"/>
        <div className="hero-text">
          <h1>We Are Recruiting!</h1>
          <p>
            Ready to join the tech-savvy squad? Or are you a wordsmith looking
            to showcase your skills? Maybe you've got a knack for event planning
            and logistics? Whatever your talent, IEEE JU Student Branch has a
            team for you! Join us now and be a part of the dynamic Tech,
            Content, PR, Design and Logistics teams. Don't miss out on this
            exciting opportunity to expand your horizons and unleash your
            potential.
          </p>
          <a href="#teams" className="hero-teams hero-buttons">Teams</a>
          <a href="#contact" className="hero-contact hero-buttons">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default home;
