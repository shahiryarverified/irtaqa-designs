import React from "react";
import "./style.css"; // Assuming the CSS file is named style.css and is in the same directory
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import image from "../../assets/logo/1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={image} alt="Irtaqa Designs Logo" className="footer-logo" />
          <p>© 2023 Irtaqa designs. All rights reserved</p>
          <div className="footer-section social-section">
            <Twitter className="social-icon" />
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
          </div>
        </div>
        <div className="footer-section links-section">
          <div className="footer-column">
            <a
              href="#home"
              onClick={() => {
                const targetDiv = document.querySelector(".hero-section"); // Replace "yourDivName" with the actual name of your div
                if (targetDiv) {
                  window.scrollTo({
                    top: targetDiv.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                const targetDiv = document.querySelector(".story-content"); // Replace "yourDivName" with the actual name of your div
                if (targetDiv) {
                  window.scrollTo({
                    top: targetDiv.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              About
            </a>
            <a
              href="#team"
              onClick={() => {
                const targetDiv = document.querySelector(".team-section"); // Replace "yourDivName" with the actual name of your div
                if (targetDiv) {
                  window.scrollTo({
                    top: targetDiv.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Team
            </a>
          </div>
          <div className="footer-column">
            <a
              href="#projects"
              onClick={() => {
                const targetDiv = document.querySelector(".projects-section"); // Replace "yourDivName" with the actual name of your div
                if (targetDiv) {
                  window.scrollTo({
                    top: targetDiv.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Projects
            </a>
            <a
              href="#clients"
              onClick={() => {
                const targetDiv = document.querySelector(
                  ".our-clients-section"
                ); // Replace "yourDivName" with the actual name of your div
                if (targetDiv) {
                  window.scrollTo({
                    top: targetDiv.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Clients
            </a>
            <a
              href="#contact"
              onClick={() => {
                const targetDiv = document.querySelector(".contact-us-section"); // Replace "yourDivName" with the actual name of your div
                if (targetDiv) {
                  window.scrollTo({
                    top: targetDiv.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="footer-map">{/* Embed your map here */}</div>
    </footer>
  );
};

export default Footer;
