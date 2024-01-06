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

  const navLinks = [
    { name: "Home", anchor: "hero-section", offset: -1100 },
    { name: "About", anchor: "story-content", offset: isOpen ? -1100 : -200 },
    {
      name: "Projects",
      anchor: "projects-section",
      offset: isOpen ? -400 : 0,
    },
    { name: "Team", anchor: "team-section", offset: isOpen ? -400 : 0 },
    { name: "Contact", anchor: "contact-us-section", offset: 0 },
  ];

  const scrollToSection = (anchor, offset) => {
    const targetDiv = document.querySelector(`.${anchor}`);
    if (targetDiv) {
      window.scrollTo({
        top: targetDiv.offsetTop + offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="navbar">
      <div className="logo-hamburger">
        <div className="logo">
          <img src={image} alt="logo" />
        </div>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <span>&#9776;</span> : <span>&times;</span>}
        </button>
      </div>
      <div className={isOpen ? "menu open" : "menu"}>
        <a href="#quote" id="quoteButton">
          Quote
        </a>
        <div
          className="navbar-with-submenu"
          onMouseEnter={() => setOnServices(true)}
          onMouseLeave={() => setOnServices(false)}
        >
          <a
            href="#services"
            onClick={() => scrollToSection("services", isOpen ? -400 : 0)}
          >
            Services
          </a>
          {onServices && (
            <div
              className="services-menu"
              style={{ height: `${services.length * 50 + 50}px` }} // Set the height dynamically with additional padding
            >
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
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={`#${link.anchor}`}
            onClick={() => scrollToSection(link.anchor, link.offset)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
