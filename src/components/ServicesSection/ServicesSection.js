import React from "react";
import "./style.css";

const ServiceCard = ({ title, icon }) => (
  <div className="service-card">
    <div className="icon">{icon}</div>
    <div className="title">{title}</div>
  </div>
);

const ServicesSection = () => {
  // Placeholder icons. Replace with actual icons or images.
  const icons = ["🏢", "🌆", "💧", "🌍", "🍃", "📐", "📊", "📏"];

  const services = [
    { title: "Building / Structures", icon: icons[0] },
    { title: "Urban Development", icon: icons[1] },
    { title: "Water Supply & Sanitation", icon: icons[2] },
    { title: "Geo Technical", icon: icons[3] },
    { title: "Environmental", icon: icons[4] },
    { title: "Planning & Management", icon: icons[5] },
    { title: "Quantity & Estimation", icon: icons[6] },
    { title: "Surveying", icon: icons[7] },
  ];

  return (
    <section className="services">
      <h2>Our ServicesSection</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
