import React, { useEffect, useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import "./style.css";

const Project = () => {
  const placeholderImages = [
    "https://source.unsplash.com/1600x900/?architecture",
    "https://source.unsplash.com/1601x900/?architecture",
    "https://source.unsplash.com/1602x900/?architecture",
    "https://source.unsplash.com/1603x900/?architecture",
    "https://source.unsplash.com/1604x900/?architecture",
    "https://source.unsplash.com/1605x900/?architecture",
    "https://source.unsplash.com/1606x900/?architecture",
    "https://source.unsplash.com/1607x900/?architecture",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change 3000 to the interval duration in milliseconds
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === placeholderImages.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? placeholderImages.length - 1 : current - 1);
  };

  return (
    <div className="project-container">
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
      <div className="slideshow">
        <div className="container">
          <button onClick={prevSlide}>
            <ChevronLeftRounded />
          </button>
          <img src={placeholderImages[current]} alt="slide" />
          <button onClick={nextSlide}>
            <ChevronRightRounded />
          </button>
        </div>
        <h2>Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis, justo in varius tincidunt, ipsum justo tincidunt justo, nec
          tincidunt justo justo in justo. Nulla facilisi. Phasellus nec justo
          justo. Integer justo justo, justo justo justo, justo justo justo,
          justo justo justo, justo justo justo, justo justo justo, justo justo
          justo, justo justo justo, justo justo justo, justo justo justo, justo
          justo justo, justo justo justo, justo justo justo, justo justo justo,
          justo justo justo, justo justo justo, justo justo justo, justo justo
          justo, justo justo justo, justo justo justo, justo justo justo, justo
          justo justo, justo justo justo, justo justo justo, justo justo justo,
          justo justo justo, justo justo justo, justo justo justo, justo justo
          justo, justo justo justo, justo justo justo, justo justo justo, justo
          justo justo, justo justo justo, justo justo justo, justo justo justo,
          justo justo justo, justo justo justo, justo justo justo, justo justo
          justo, justo justo justo, justo justo justo, justo justo justo, justo
          justo justo, justo justo justo, justo justo justo, justo justo justo,
          justo justo justo, justo justo justo
        </p>
      </div>
    </div>
  );
};

export default Project;
