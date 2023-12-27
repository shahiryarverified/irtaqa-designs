// TeamSection.js
import React from "react";
import "./style.css";
import image1 from "../../assets/image2.jpg";
// import image2 from "../../assets/image2.jpg";
// import image3 from "../../assets/image2.jpg";
// import image4 from "../../assets/image2.jpg";
// import image5 from "../../assets/image2.jpg";
// import image6 from "../../assets/image2.jpg";

const TeamMemberProfile = ({ member }) => {
  return (
    <div className="team-member-profile">
      <div className="profile-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="profile-details">
        <h3>{member.name}</h3>
        <p>{member.position}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Construction Worker",
      image: image1,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Site Engineer",
      image: image1,
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Architect",
      image: image1,
    },
    {
      id: 4,
      name: "Emily Brown",
      position: "Project Manager",
      image: image1,
    },
    {
      id: 5,
      name: "Michael Lee",
      position: "Civil Engineer",
      image: image1,
    },
    {
      id: 6,
      name: "Sophia Garcia",
      position: "Foreman",
      image: image1,
    },
    {
      id: 7,
      name: "William Clark",
      position: "Electrician",
      image: image1,
    },
    {
      id: 8,
      name: "Olivia Martinez",
      position: "Plumber",
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
      {/* <button className="show-all-btn">Show All</button> */}
    </div>
  );
};

export default TeamSection;
