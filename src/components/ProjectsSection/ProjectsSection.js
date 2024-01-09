import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projectssection.css";
import image1 from "../../assets/projects/1.jpg";
import image2 from "../../assets/projects/2.jpg";
import image3 from "../../assets/projects/3.jpg";
import image4 from "../../assets/projects/4.jpeg";
import image5 from "../../assets/projects/5.jpeg";
import image6 from "../../assets/projects/6.jpeg";

const projects = [
  {
    name: "Gulbahar Plaza",
    image: image1,
    type: "Commercial",
  },
  {
    name: "Commercial Mall Kharian",
    image: image2,
    type: "Commercial",
  },
  {
    name: "Meezan Bank Reginal Office",
    image: image3,
    type: "Commercial",
  },
  {
    name: "Leather Tennary, Sialkot",
    image: image4,
    type: "Residential",
  },
  {
    name: "Al Najran Avenue KSA",
    image: image5,
    type: "Residential",
  },
  {
    name: "Khan Villa, Lahore",
    image: image6,
    type: "Residential",
  },
];

const ProjectsSection = () => {
  const [activeSection, setActiveSection] = useState("All");

  return (
    <div className="projects-section">
      <div className="headings">
        <h4>WE WORK SMARTLY!</h4>
        <h2>Our Portfolio</h2>
      </div>
      <div className="filter-buttons">
        <button
          className={
            "filter-button " + (activeSection === "All" ? "active" : "")
          }
          onClick={() => {
            setActiveSection("All");
          }}
        >
          All
        </button>
        <button
          className={
            "filter-button " + (activeSection === "Commercial" ? "active" : "")
          }
          onClick={() => {
            setActiveSection("Commercial");
          }}
        >
          Commercial
        </button>
        <button
          className={
            "filter-button " + (activeSection === "Residential" ? "active" : "")
          }
          onClick={() => {
            setActiveSection("Residential");
          }}
        >
          Residential
        </button>
      </div>
      <div className="projects-grid">
        {projects.map(
          (project, index) =>
            (activeSection === "All" || project.type === activeSection) && (
              <Link to={`/project/${index + 1}`} key={index}>
                <div className="project-card" key={index}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                  <div className="project-info">
                    <span className="project-name">{project.name}</span>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
