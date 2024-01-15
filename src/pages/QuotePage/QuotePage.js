import React, { useState } from "react";
import "./quotepage.css";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    architecturalDrawings: "",
    size: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here or send to an API
    console.log(formData);
  };

  return (
    <div className="quote">
      <div className="headings">
        <h4>WE ARE READY!</h4>
        <h2>Give us a Quote</h2>
      </div>
      <div className="quote-section">
        <form className="quote-form" onSubmit={handleSubmit}>
          <label htmlFor="name">NAME *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="contactNumber">CONTACT NUMBER *</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            required
            value={formData.contactNumber}
            onChange={handleChange}
          />

          <label htmlFor="architecturalDrawings">ARCHITECTURAL DRAWINGS</label>
          <select
            id="architecturalDrawings"
            name="architecturalDrawings"
            value={formData.architecturalDrawings}
            onChange={handleChange}
          >
            <option value="">Please Select</option>
            <option value="ARCHITECTURAL DRAWINGS">
              ARCHITECTURAL DRAWINGS
            </option>
            <option value="INTERIOR DESIGN">INTERIOR DESIGN</option>
            <option value="GREY STRUCTURE CONSTRUCTION">
              GREY STRUCTURE CONSTRUCTION
            </option>
            <option value="TURN KEY BASIS CONSTRUCTION">
              TURN KEY BASIS CONSTRUCTION
            </option>
            <option value="PROJECT MANAGEMENT">PROJECT MANAGEMENT</option>
          </select>

          <label htmlFor="size">5 MARLA</label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          >
            <option value="">Please Select</option>
            <option value="5 MARLA">5 MARLA</option>
            <option value="10 MARLA">10 MARLA</option>
            <option value="1 KANAL">1 KANAL</option>
            <option value="2 KANAL">2 KANAL</option>
            <option value="4 KANAL">4 KANAL</option>
          </select>

          <label htmlFor="message">MESSAGE...</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">SUBMIT</button>
        </form>
        <div className="contact-details">
          <div className="contact-header">
            <h3>Let's Start a Project</h3>
          </div>
          <p>
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>
          <div className="contact-info">
            <div className="office">
              <h4>Pakistan Head Office:</h4>
              <p>172 - MB - Phase6 DHA - Lahore - 54792</p>
            </div>
            <div className="office">
              <h4>UK & Europe Office:</h4>
              <p>
                48 Northfield Road Peterborough PE1 3QJ Cambridgeshire England
              </p>
            </div>
            <div className="office">
              <h4>Middle East Office:</h4>
              <p>
                1512-Parklane Tower Business Bay- Al'Amaal Street- P.O.Box
                392196-Dubai-UAE
              </p>
            </div>
            <div className="office">
              <h4>Pakistan Branch Office 1:</h4>
              <p>
                234 - Tulip Commercial Opposite Grand Masjid Jinnah Avenue -
                Bahria Town Lahore - Pakistan - 53720
              </p>
            </div>
            <div className="contact-email">
              <h4>Email:</h4>
              <p>info@gloriousbuilders.com</p>
            </div>
            <div className="contact-phone">
              <h4>OUR PHONE:</h4>
              <p>+92 (323) 9999 450</p>
            </div>
          </div>
          <div className="social-media">
            {/* Social media icons would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
