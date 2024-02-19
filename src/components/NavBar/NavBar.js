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
        {navLinks.map((link, index) => {
          if (link.name === "About") {
            return (
              <React.Fragment key={index}>
                <Link
                  to={link.to}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {link.name}
                </Link>
                <div
                  className="navbar-with-submenu"
                  onMouseEnter={() => setOnServices(true)}
                  onMouseLeave={() => setOnServices(false)}
                >
                  <div className="link-with-icon">
                    <Link
                      to="/services"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Services
                    </Link>
                    <ArrowDropDown
                      className="service-arrow"
                      onClick={() => setOnServices(!onServices)}
                    />
                  </div>
                  {onServices && (
                    <div
                      className="services-menu"
                      style={{ height: `${services.length * 50 + 60}px` }} // Set the height dynamically with additional padding
                    >
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={`/service/${serviceIndex + 1}`}
                          onClick={() => {
                            setIsOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <Link
                key={index}
                to={link.to}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {link.name}
              </Link>
            );
          }
        })}
        <Link
          to="/quote"
          id="quoteButton"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Quote
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
