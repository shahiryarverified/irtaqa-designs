import React from "react";
import "./ourclientssection.css"; // Make sure to import the CSS file
import image1 from "../../assets/clients/1.jpeg";
import image2 from "../../assets/clients/2.jpeg";
import image3 from "../../assets/clients/3.jpeg";
import image4 from "../../assets/clients/4.jpeg";
import image5 from "../../assets/clients/5.jpeg";
import image6 from "../../assets/clients/6.jpeg";
import image7 from "../../assets/clients/7.jpeg";
import image8 from "../../assets/clients/8.jpeg";
import image9 from "../../assets/clients/9.jpeg";
import image10 from "../../assets/clients/10.jpeg";
import image11 from "../../assets/clients/11.jpeg";

const clientImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const OurClientsSection = () => {
  return (
    <div className="our-clients-section">
      <div className="headings">
        <h4>PEOPLE LOVE US!</h4>
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
