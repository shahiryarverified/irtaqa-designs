import React from "react";
import "./contactussection.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function ContactUsSection() {
  return (
    <div className="contact-us-section">
      <div className="contact-us-section-inner">
        <div className="contact-info">
          <h2>CONTACT US</h2>
          <p className="phone-number">+92-3009596802</p>
          <p className="email">contact@irtaqadesigns</p>
          <p className="address">DHA4,Lahore,Pakistan</p>
          <div className="social-icons">
            <Twitter className="social-icon" />
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
          </div>
        </div>
        <div className="contact-form-outer">
          <p>Fill up the form below to contact</p>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Mail" />
            <textarea placeholder="Message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
