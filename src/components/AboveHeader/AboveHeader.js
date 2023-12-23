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
        <div id="text">
          <span style={{ padding: "0px 30px 0px 10px" }}>+92 300 9596 802</span>
        </div>
        <MailOutline />
        <div id="text">
          <span style={{ padding: "0px 30px 0px 10px" }}>
            contact@irtaqadesigns.com
          </span>
        </div>
      </div>
      <div id="div-icons">
        <FacebookOutlined id="icon" />
        <Twitter id="icon" />
        <Instagram id="icon" />
        <LinkedIn id="icon" />
      </div>
    </section>
  );
};

export default AboveHeader;
