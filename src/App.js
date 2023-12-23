import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StorySection from "./components/Storysection/StorySection";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/ServicesSection/ServicesSection";
import TeamSection from "./components/TeamSection/TeamSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import OurClientsSection from "./components/OurClientsSection/OurClientsSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <StorySection />
      <Services />
      <TeamSection />
      <ProjectsSection />
      <OurClientsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
