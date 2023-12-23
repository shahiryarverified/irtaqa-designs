import React from "react";
import "./style.css"; // Import the CSS file for styling

const projects = [
  {
    name: "Gulbahar Plaza",
    image: "path-to-gulbahar-plaza.jpg",
    type: "Commercial",
  },
  {
    name: "Commercial Mall Kharian",
    image: "path-to-commercial-mall.jpg",
    type: "Commercial",
  },
  {
    name: "Meezan Bank Reginal Office",
    image: "path-to-meezan-bank.jpg",
    type: "Commercial",
  },
  {
    name: "Leather Tennary, Sialkot",
    image: "path-to-leather-tennary.jpg",
    type: "Residential",
  },
  {
    name: "Al Najran Avenue KSA",
    image: "path-to-al-najran.jpg",
    type: "Residential",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Most Popular Projects</h2>
      <div className="filter-buttons">
        <button>All</button>
        <button>Commercial</button>
        <button>Residential</button>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
