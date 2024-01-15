import React from "react";
import "./projectcounter.css";
import { CheckCircle, EmojiEmotions, LocationCity } from "@mui/icons-material";

const ProjectCounter = () => {
  return (
    <div className="project-counter">
      <div className="counter-section">
        <CheckCircle style={{ fontSize: "7rem", paddingBottom: "30px" }} />
        <h1>300+</h1>
        <h2>Projects Completed</h2>
      </div>
      <div className="counter-section">
        <EmojiEmotions style={{ fontSize: "7rem", paddingBottom: "30px" }} />
        <h1>280+</h1>
        <h2>Happy Clients</h2>
      </div>
      <div className="counter-section">
        <LocationCity style={{ fontSize: "7rem", paddingBottom: "30px" }} />
        <h1>20+</h1>
        <h2>Cities</h2>
      </div>
    </div>
  );
};

export default ProjectCounter;
