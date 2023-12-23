import React from "react";

const NavBar = () => {
  return (
    <div>
      {" "}
      <nav
        style={{
          background: "white",
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          // padding: "10px 50px",
        }}
      >
        <img
          src="logo-path"
          alt="Irtiqa Designs Logo"
          style={{ height: "50px" }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="#home"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Home
          </a>
          <a
            href="#about"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            About
          </a>
          <a
            href="#services"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Services
          </a>
          <a
            href="#projects"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Projects
          </a>
          <a
            href="#team"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Team
          </a>
          <a
            href="#contact"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
