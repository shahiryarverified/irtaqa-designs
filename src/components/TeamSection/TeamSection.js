// TeamSection.js
import React from "react";
import "./style.css";
import image1 from "../../assets/image2.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image2.jpg";
import image4 from "../../assets/image2.jpg";
import image5 from "../../assets/image2.jpg";
import image6 from "../../assets/image2.jpg";

const TeamMemberProfile = ({ member }) => {
  return (
    <div className="team-member-profile">
      <div className="profile-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="profile-details">
        <h3>{member.name}</h3>
        <p>{member.occupation}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      image: image1,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      image: image1,
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "UX Designer",
      image: image1,
    },
    {
      id: 4,
      name: "Emily Brown",
      position: "Marketing Specialist",
      image: image1,
    },
    {
      id: 5,
      name: "Michael Lee",
      position: "Data Analyst",
      image: image1,
    },
    {
      id: 6,
      name: "Sophia Garcia",
      position: "Project Manager",
      image: image1,
    },
  ];

  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <TeamMemberProfile key={member.id} member={member} />
        ))}
      </div>
      <button className="show-all-btn">Show All</button>
    </div>
  );
};

export default TeamSection;
