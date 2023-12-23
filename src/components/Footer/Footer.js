import React from "react";
import "./style.css"; // Assuming the CSS file is named style.css and is in the same directory

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          {/* Logo and copyright text */}
          <img
            src="path-to-your-logo.png"
            alt="Irtaqa Designs Logo"
            className="footer-logo"
          />
          <p>© 2023 Irtaqa designs. All rights reserved</p>
        </div>
        <div className="footer-section links-section">
          {/* Navigation links */}
          <div className="footer-column">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Team</h4>
          </div>
          <div className="footer-column">
            <h4>Projects</h4>
            <h4>Clients</h4>
            <h4>Contact</h4>
          </div>
        </div>
        <div className="footer-section social-section">
          {/* Social media icons */}
          <a href="link-to-twitter" className="social-icon">
            <img src="path-to-twitter-icon.png" alt="Twitter" />
          </a>
          <a href="link-to-facebook" className="social-icon">
            <img src="path-to-facebook-icon.png" alt="Facebook" />
          </a>
          <a href="link-to-instagram" className="social-icon">
            <img src="path-to-instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-map">{/* Embed your map here */}</div>
    </footer>
  );
};

export default Footer;
