import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>IRTIQA DESIGNS</span>
      </div>
      <div className="menu">
        <a href="#quote">Quote</a>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
