import React from "react";
import "./style.css"; // Make sure to create a corresponding CSS file

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-members">
        {/* Repeat this block for each team member */}
        <div className="team-member">
          <img
            src="path-to-image.jpg"
            alt="Team Member"
            className="member-photo"
          />
          <h3>Engr. Name</h3>
          <p>Position</p>
          <p>ID: XXXXX</p>
        </div>
        <div className="team-member">
          <img
            src="path-to-image.jpg"
            alt="Team Member"
            className="member-photo"
          />
          <h3>Engr. Name</h3>
          <p>Position</p>
          <p>ID: XXXXX</p>
        </div>
        <div className="team-member">
          <img
            src="path-to-image.jpg"
            alt="Team Member"
            className="member-photo"
          />
          <h3>Engr. Name</h3>
          <p>Position</p>
          <p>ID: XXXXX</p>
        </div>
        <div className="team-member">
          <img
            src="path-to-image.jpg"
            alt="Team Member"
            className="member-photo"
          />
          <h3>Engr. Name</h3>
          <p>Position</p>
          <p>ID: XXXXX</p>
        </div>
        <div className="team-member">
          <img
            src="path-to-image.jpg"
            alt="Team Member"
            className="member-photo"
          />
          <h3>Engr. Name</h3>
          <p>Position</p>
          <p>ID: XXXXX</p>
        </div>
        <div className="team-member">
          <img
            src="path-to-image.jpg"
            alt="Team Member"
            className="member-photo"
          />
          <h3>Engr. Name</h3>
          <p>Position</p>
          <p>ID: XXXXX</p>
        </div>
      </div>
      <button className="show-all-btn">Show All</button>
    </div>
  );
};

export default TeamSection;
