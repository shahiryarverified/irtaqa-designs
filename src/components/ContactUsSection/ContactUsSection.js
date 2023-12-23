import React from "react";
import "./style.css"; // Make sure to create this CSS file

function ContactUsSection() {
  return (
    <div className="contact-us-section">
      <h2>Contact US</h2>
      <div className="contact-info">
        <h3>Contact</h3>
        <p>Fill up the form below to contact</p>
        <p className="phone-number">📞 +92-3009596802</p>
        <p className="email">✉️ contact@irtaqadesigns</p>
        <p className="address">📍 DHA4,Lahore,Pakistan</p>
        <div className="social-icons">
          {/* Icons would be inserted here, possibly using an icon library like Font Awesome */}
        </div>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Mail" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default ContactUsSection;
