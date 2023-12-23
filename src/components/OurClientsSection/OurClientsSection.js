import React from "react";
import "./style.css"; // Make sure to import the CSS file

const clientImages = [
  // Add the paths to your client images here
  "/path-to-client-image-1.png",
  "/path-to-client-image-2.png",
  "/path-to-client-image-3.png",
  // ... more images
];

const OurClientsSection = () => {
  return (
    <div className="our-clients-section">
      <div className="header">
        <h5>PEOPLE LOVE US</h5>
        <h2>Our Clients</h2>
      </div>
      <div className="slideshow">
        <div className="slideshow-slider">
          {clientImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Client ${index + 1}`}
              className="slide"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClientsSection;
