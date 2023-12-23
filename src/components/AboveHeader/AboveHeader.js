import React from "react";
import "@mui/icons-material";
import "./style.css";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  MailOutline,
  PhoneOutlined,
  Twitter,
} from "@mui/icons-material";

const AboveHeader = () => {
  return (
    <section id="main">
      <div id="div-text">
        <PhoneOutlined />
        <span style={{ paddingRight: "20px" }}>+92 300 9596 802</span>
        <MailOutline />
        <span style={{ paddingRight: "20px" }}>contact@irtaqadesigns.com</span>
      </div>
      <div id="div-icons">
        <FacebookOutlined />
        <Twitter />
        <Instagram />
        <LinkedIn />
      </div>
    </section>
  );
};

export default AboveHeader;
