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
import NavBar from "./components/NavBar/NavBar";
import AboveHeader from "./components/AboveHeader/AboveHeader";

function App() {
  return (
    <div className="App">
      <AboveHeader />
      <Header />
      <NavBar />
      <HeroSection name="hero" />
      <StorySection name="story" />
      <Services name="services" />
      <TeamSection name="team" />
      <ProjectsSection name="projects" />
      <OurClientsSection name="clients" />
      <ContactUsSection name="contact" />
      <Footer />
    </div>
  );
}

export default App;
