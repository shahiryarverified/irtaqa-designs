import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import image from "../../assets/logo/1.png";
import { ArrowDropDown } from "@mui/icons-material";

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
    { name: "Home", to: "/", anchor: "hero-section" },
    {
      name: "About",
      to: "/about",
      anchor: "story-content",
    },
    {
      name: "Projects",
      to: "/projects",
      anchor: "projects-section",
    },
    {
      name: "Team",
      to: "/team",
      anchor: "team-section",
    },
    {
      name: "Contact",
      to: "/contact",
      anchor: "contact-us-section",
      offset: 0,
    },
  ];

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
        <Link to="/quote" id="quoteButton">
          Quote
        </Link>
        <div
          className="navbar-with-submenu"
          onMouseEnter={() => setOnServices(true)}
          onMouseLeave={() => setOnServices(false)}
        >
          <div
            className="link-with-icon"
            onClick={() => setOnServices(!onServices)}
          >
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <ArrowDropDown className="service-arrow" />
          </div>
          {onServices && (
            <div
              className="services-menu"
              style={{ height: `${services.length * 50 + 60}px` }} // Set the height dynamically with additional padding
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/${service.title.replace(/ /g, "").toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
