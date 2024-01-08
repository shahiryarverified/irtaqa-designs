import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboveHeader from "./components/AboveHeader/AboveHeader";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import StorySection from "./components/Storysection/StorySection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import TeamSection from "./components/TeamSection/TeamSection";
import NotFound from "./pages/NotFound/NotFound";
import Project from "./pages/Project/Project";
import Service from "./pages/Service/Service";

function App() {
  return (
    <Router>
      <div className="App">
        <AboveHeader />
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactUsSection />} />
          <Route exact path="/about" element={<StorySection />} />
          <Route exact path="/services" element={<ServicesSection />} />
          <Route exact path="/projects" element={<ProjectsSection />} />
          <Route exact path="/team" element={<TeamSection />} />
          <Route exact path="/project/:id" element={<Project />} />
          <Route exact path="/service/:id" element={<Service />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
