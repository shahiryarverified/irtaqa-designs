// TeamSection.js
import React from "react";
import "./teamsection.css";
import image1 from "../../assets/profileImages/John.jpeg";
import image2 from "../../assets/profileImages/Jane.jpeg";
import image3 from "../../assets/profileImages/Alex.jpeg";
import image4 from "../../assets/profileImages/Emily.jpeg";
import image5 from "../../assets/profileImages/Michael Lee.jpeg";
import image6 from "../../assets/profileImages/Sophia.jpeg";
import image7 from "../../assets/profileImages/William.jpeg";
import image8 from "../../assets/profileImages/Olivia.jpeg";

const TeamMemberProfile = ({ member }) => {
  return (
    <div className="team-member-profile">
      <div className="profile-details">
        <h3>{member.name}</h3>
        <p>{member.position}</p>
      </div>
      <div className="profile-image">
        <img src={member.image} alt={member.name} />
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Imran",
      position: "Construction Director",
      image: image1,
    },
    {
      id: 2,
      name: "Ayesha",
      position: "Site Engineer",
      image: image2,
    },
    {
      id: 3,
      name: "Ali",
      position: "Architect",
      image: image3,
    },
    {
      id: 4,
      name: "Emaan",
      position: "Project Manager",
      image: image4,
    },
    {
      id: 5,
      name: "Musa",
      position: "Civil Engineer",
      image: image5,
    },
    {
      id: 6,
      name: "Alina",
      position: "Foreman",
      image: image6,
    },
    {
      id: 7,
      name: "Waleed",
      position: "Electrician",
      image: image7,
    },
    {
      id: 8,
      name: "Sara",
      position: "Asisstant",
      image: image8,
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
