import React from "react";
import "./style.css";
import image from "../../assets/logo/1.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
        src={image} alt="logo"
        />
      </div>
      <div className="menu">
        <a href="#quote" id="quoteButton">
          Quote
        </a>
        <a href="#home">Home</a>
        <a
          href="#story"
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
          href="#services"
          onClick={() => {
            const targetDiv = document.querySelector(".services"); // Replace "yourDivName" with the actual name of your div
            if (targetDiv) {
              window.scrollTo({
                top: targetDiv.offsetTop,
                behavior: "smooth",
              });
            }
          }}
        >
          Services
        </a>
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
  );
};

export default NavBar;
