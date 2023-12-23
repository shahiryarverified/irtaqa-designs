import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import {
  FoundationOutlined,
  LocationOnOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import AboveHeader from "../AboveHeader/AboveHeader";
const Header = () => {
  return (
    <section className="header">
      <AboveHeader />
      <header>
        <div className="header-container-main">
          <div className="header-container-left">
            <div>
              <FoundationOutlined id="header-container-left-icon" />
            </div>
            <div className="header-container-left-background"></div>
          </div>
          <div className="header-container-right">
            <div className="header-container">
              <PhoneOutlined id="header-container-icon" />
              <div className="header-container-text">
                <span>Call us anytime</span>
              </div>
              <div>
                <span>+92 300 9596 802</span>
              </div>
            </div>
            <div className="header-container">
              <LocationOnOutlined id="header-container-icon" />
              <div className="header-container-text">
                <span>Come Visit Us DHA</span>
              </div>
              <div>
                <span> Phase 4, Lahore, Pakistan</span>
              </div>
            </div>
            <div className="header-container">
              <MessageOutlined id="header-container-icon" />
              <div className="header-container-text">
                <span>Send us a message</span>
              </div>
              <div>
                <span> contact@irtaqadesigns.com</span>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </section>
  );
};

export default Header;
