import React, { useEffect, useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import "./style.css";
import { useParams } from "react-router-dom";
import image1 from "../../assets/projects/7.jpeg";
import image2 from "../../assets/projects/8.jpeg";
import image3 from "../../assets/projects/9.jpeg";
import image4 from "../../assets/projects/10.jpeg";
import image5 from "../../assets/projects/11.jpeg";
import image6 from "../../assets/projects/12.jpeg";

const Project = () => {
  const projectId = useParams();
  const placeholderImages = [image1, image2, image3, image4, image5, image6];
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change 3000 to the interval duration in milliseconds
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (isChanging) {
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 300); // 300ms is the duration of the transition
      return () => clearTimeout(timer);
    }
  }, [isChanging]);

  const nextSlide = () => {
    const nextIndex =
      current === placeholderImages.length - 1 ? 0 : current + 1;
    const img = new Image();
    img.src = placeholderImages[nextIndex];
    img.onload = () => {
      setIsChanging(true);
      setCurrent(nextIndex);
    };
  };

  const prevSlide = () => {
    const prevIndex =
      current === 0 ? placeholderImages.length - 1 : current - 1;
    const img = new Image();
    img.src = placeholderImages[prevIndex];
    img.onload = () => {
      setIsChanging(true);
      setCurrent(prevIndex);
    };
  };

  return (
    <div className="project-container">
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
      <img
        className={`slideshow-image ${isChanging ? "changing" : ""}`}
        src={placeholderImages[current]}
        alt={`slide +${projectId}`}
      />
      <div className="slideshow">
        <div className="container">
          <button onClick={prevSlide}>
            <ChevronLeftRounded />
          </button>
          <button onClick={nextSlide}>
            <ChevronRightRounded />
          </button>
        </div>
        <h1>Project Title</h1>
        <p>
          The project involved the construction of a state-of-the-art, huge mall
          that aims to provide a diverse and enriching shopping experience for
          the community. The mall will feature a wide range of retail stores,
          entertainment facilities, food courts, and recreational areas,
          catering to the varied needs and preferences of visitors. With a focus
          on modern architecture and sustainable design, the mall will be an
          iconic landmark, offering a blend of convenience, luxury, and leisure.
          The construction will adhere to the highest standards of safety,
          quality, and environmental responsibility, ensuring a lasting and
          impactful addition to the urban landscape.
        </p>
      </div>
    </div>
  );
};

export default Project;
