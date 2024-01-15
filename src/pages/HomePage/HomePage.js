import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/ServicesSection/ServicesSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import OurClientsSection from "../../components/OurClientsSection/OurClientsSection";
import ProjectCounter from "../../components/ProjectCounter/ProjectCounter";

const HomePage = () => {
  return (
    <div>
      <HeroSection name="hero" />
      <ProjectCounter name="counter" />
      <Services name="services" />
      <OurClientsSection name="clients" />
      <ProjectsSection name="projects" />
    </div>
  );
};

export default HomePage;
