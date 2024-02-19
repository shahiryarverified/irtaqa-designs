import React, { useEffect, useState } from "react";
import "./footer.css"; // Assuming the CSS file is named style.css and is in the same directory
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import image from "../../assets/logo/1.png";
import { Link } from "react-router-dom";

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

const Footer = () => {
  const [targetDiv, setTargetDiv] = useState(null);

  useEffect(() => {
    if (targetDiv) {
      window.scrollTo({
        top: targetDiv.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [targetDiv]);

  return (
    <footer className="footer">
      <img src={image} alt="Irtaqa Designs Logo" className="footer-logo" />
      <div className="footer-content">
        <div className="footer-column">
          <h2>Menu</h2>
          <Link
            to="/"
            onClick={() => {
              setTargetDiv(0);
              setTargetDiv(document.querySelector("#main"));
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setTargetDiv(0);
              setTimeout(() => {
                const section = document.querySelector(".story");
                if (section) {
                  setTargetDiv(section);
                }
              }, 0);
            }}
          >
            About
          </Link>
          <Link
            to="/team"
            onClick={() => {
              setTargetDiv(0);
              setTimeout(() => {
                const section = document.querySelector(".team-section");
                if (section) {
                  setTargetDiv(section);
                }
              }, 0);
            }}
          >
            Team
          </Link>
          <Link
            to="/projects"
            onClick={() => {
              setTargetDiv(0);
              setTimeout(() => {
                const section = document.querySelector(".projects-section");
                if (section) {
                  setTargetDiv(section);
                }
              }, 0);
            }}
          >
            Projects
          </Link>
          <Link
            to="/"
            onClick={() => {
              setTargetDiv(0);
              setTimeout(() => {
                const section = document.querySelector(".our-clients-section");
                if (section) {
                  setTargetDiv(section);
                }
              }, 0);
            }}
          >
            Clients
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setTargetDiv(0);
              setTimeout(() => {
                const section = document.querySelector(".contact-us-section");
                if (section) {
                  setTargetDiv(section);
                }
              }, 0);
            }}
          >
            Contact
          </Link>
        </div>
        <div className="footer-column">
          <h2>Our Services</h2>
          <Link
            to={"/services"}
            onClick={() => {
              setTargetDiv(0);
              setTimeout(() => {
                const section = document.querySelector(".services");
                if (section) {
                  setTargetDiv(section);
                }
              }, 0);
            }}
          >
            Services
          </Link>
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/service/${index + 1}`}
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 10);
              }}
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div className="footer-column contact-us-info">
          <h2>Contact Us</h2>
          <p>+92-3009596802</p>
          <p>contact@irtaqadesigns</p>
          <p>DHA4,Lahore,Pakistan</p>
        </div>
        <div className="footer-map">
          <iframe
            data-lazyloaded="1"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6806.372598311991!2d74.384357!3d31.464061000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dd16ba25d7%3A0xbae9c86693ece994!2sIrtiqa%20Designs!5e0!3m2!1sen!2sus!4v1704393506183!5m2!1sen!2sus"
            data-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6806.372598311991!2d74.384357!3d31.464061000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dd16ba25d7%3A0xbae9c86693ece994!2sIrtiqa%20Designs!5e0!3m2!1sen!2sus!4v1704393506183!5m2!1sen!2sus"
            width="350"
            height="250"
            style={{ width: "100%", height: "100%", border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Irtaqa Designs"
            data-ll-status="loaded"
            className="entered litespeed-loaded"
          ></iframe>
        </div>
      </div>
      <div className="footer-section social-section">
        <p>© 2023 Irtaqa designs. All rights reserved</p>
        <Link
          to={"/"}
          onClick={() => {
            setTargetDiv(0);
            setTimeout(() => {
              const section = document.querySelector("#main");
              if (section) {
                setTargetDiv(section);
              }
            }, 0);
          }}
        >
          <Twitter className="social-icon" />
        </Link>
        <Link
          to={"/"}
          onClick={() => {
            setTargetDiv(0);
            setTimeout(() => {
              const section = document.querySelector("#main");
              if (section) {
                setTargetDiv(section);
              }
            }, 0);
          }}
        >
          <Facebook className="social-icon" />
        </Link>
        <Link
          to={"/"}
          onClick={() => {
            setTargetDiv(0);
            setTimeout(() => {
              const section = document.querySelector("#main");
              if (section) {
                setTargetDiv(section);
              }
            }, 0);
          }}
        >
          <Instagram className="social-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
