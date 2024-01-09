import React, { useEffect, useState } from "react";
import "./footer.css"; // Assuming the CSS file is named style.css and is in the same directory
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import image from "../../assets/logo/1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [targetDiv, setTargetDiv] = useState(null);

  useEffect(() => {
    if (targetDiv) {
      window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
      });
    }
  }, [targetDiv]);

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
        <div className="footer-map">
          <iframe
            data-lazyloaded="1"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6806.372598311991!2d74.384357!3d31.464061000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dd16ba25d7%3A0xbae9c86693ece994!2sIrtiqa%20Designs!5e0!3m2!1sen!2sus!4v1704393506183!5m2!1sen!2sus"
            data-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6806.372598311991!2d74.384357!3d31.464061000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dd16ba25d7%3A0xbae9c86693ece994!2sIrtiqa%20Designs!5e0!3m2!1sen!2sus!4v1704393506183!5m2!1sen!2sus"
            width="300"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Irtaqa Designs"
            data-ll-status="loaded"
            class="entered litespeed-loaded"
          ></iframe>
        </div>
        <div className="footer-section links-section">
          <div className="footer-column">
            <Link
              to="/"
              onClick={() => {
                setTargetDiv(0);
                setTargetDiv(document.querySelector("#main"));
              }}
            >
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
          </div>
          <div className="footer-column">
            <Link
              to="/"
              onClick={() => {
                setTargetDiv(0);
                setTargetDiv(document.querySelector(".projects-section"));
              }}
            >
              Projects
            </Link>
            <Link
              to="/"
              onClick={() => {
                setTargetDiv(0);
                setTimeout(() => {
                  const section = document.querySelector(
                    ".our-clients-section"
                  );
                  if (section) {
                    setTargetDiv(section);
                  }
                }, 0);
              }}
            >
              Clients
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
