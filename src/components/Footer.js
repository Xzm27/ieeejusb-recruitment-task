import React from "react";
import "./Footer.css";
import ieee_logo_light from "../assets/ieee-logo-light.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="col footer-container">
        <div className="footer-info">
          <a href="">
            <img src={ieee_logo_light} alt="" className="footer-logo" />
          </a>
          <p>
            188, Raja Subodh Chandra Mallick Rd, Jadavpur University Campus
            Area, Jadavpur,
            <br />
            Kolkata 700032, India
            <br />
            <br />
            <strong>Email:</strong>jaduniv.ieee@gmail.com
          </p>
          <div className="social-links">
            <a href="https://twitter.com/IeeeJadavpur" target="_blank">
              <TwitterIcon className="twitter icon" />
            </a>
            <a href="https://www.facebook.com/ieeejusb" target="_blank">
              <FacebookIcon className="facebook icon" />
            </a>
            <a href="https://www.instagram.com/_ieeeju/" target="_blank">
              <InstagramIcon className="instagram icon" />
            </a>
            <a href="https://www.linkedin.com/company/ieee-ju" target="_blank">
              <LinkedInIcon className="linkedin icon" />
            </a>
          </div>
        </div>
        <p></p>
        <div className="footer-info">
          <h4>Useful Links</h4>
          <p>
            <a href="https://ieee-jaduniv.in/index.html" target="_blank">IEEE JUSB</a>
          </p>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About Us</a>
          </p>
          <p>
            <a href="https://ieee-jaduniv.in/index.html#services" target="_blank">
              Branch Chapters
            </a>
          </p>
          <p>
            <a href="https://ieee-jaduniv.in/index.html#departments" target="_blank">Blog</a>
          </p>
          <p>
            <a href="https://ieee-jaduniv.in/event.html" target="_blank">Events</a>
          </p>
          <p>
            <a href="https://ieee-jaduniv.in/team.html" target="_blank">Team</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
