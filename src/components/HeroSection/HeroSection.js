import React from "react";
import "./style.css"; // Assuming your CSS is in App.css

function HeroSection() {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-text">We Provide</h1>
        <button
          className="hero-button"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
