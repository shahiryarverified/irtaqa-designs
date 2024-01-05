import React, { useState } from "react";
import "./style.css";
import image from "../../assets/logo/1.png";

const NavBar = () => {
  const [onServices, setOnServices] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { title: "Building Structures" },
    { title: "Urban Development" },
    { title: "Water Supply & Sanitation" },
    { title: "Geo Technical" },
    { title: "Environmental" },
    { title: "Planning & Management" },
    { title: "Quantity & Estimation" },
    { title: "Surveying" },
  ];
  return (
    <div className="navbar">
      <div className="logo">
        <img src={image} alt="logo" />
      </div>
      <div className={isOpen ? "menu open" : "menu"}>
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
        <div
          className="navbar-with-submenu"
          onMouseEnter={() => setOnServices(true)}
          onMouseLeave={() => setOnServices(false)}
        >
          <div>
            <a
              href="#services"
              onClick={() => {
                const targetDiv = document.querySelector(".services");
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
            {onServices && (
              <div className="services-menu">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`#${service.title.replace(/ /g, "").toLowerCase()}`}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
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
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span>&#9776;</span>
      </button>
    </div>
  );
};

export default NavBar;
