import React, { useEffect, useState } from "react";
import "./style.css"; // Assuming your CSS is in App.css
import video from "../../assets/construction.mp4";
import "@mui/icons-material";
import { ArrowDownward } from "@mui/icons-material";

function HeroSection() {
  const [isText1, setIsText1] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const text1 = document.getElementById("text1") || "";
      const text2 = document.getElementById("text2") || "";

      if (text1 !== "" && text2 !== "") {
        if (isText1) {
          text1.style.display = "none";
          text2.style.display = "inline";
        } else {
          text1.style.display = "inline";
          text2.style.display = "none";
        }

        setIsText1(!isText1);
      }
    }, 8000);
  }, [isText1]);

  return (
    <div className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span id="text1" className="hero-title">
          We Provide Our Undersanding and Construction Services.
        </span>
        <span id="text2" style={{ display: "none" }} className="hero-title">
          We Are Professional For Building Construction.
        </span>
        <button
          className="hero-button"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <ArrowDownward />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
