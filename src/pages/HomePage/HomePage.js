import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/ServicesSection/ServicesSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import OurClientsSection from "../../components/OurClientsSection/OurClientsSection";
import ProjectCounter from "../../components/ProjectCounter/ProjectCounter";
import OurStorySummary from "../../components/OurStorySummary/OurStorySummary";

const HomePage = () => {
  return (
    <div>
      <HeroSection name="hero" />
      <ProjectCounter name="counter" />
      <Services name="services" />
      <OurStorySummary name="story-summary" />
      <ProjectsSection name="projects" />
      <OurClientsSection name="clients" />
    </div>
  );
};

export default HomePage;
