import React from "react";
import "./style.css";

const StorySection = () => {
  return (
    // JSX for the "Our Story" section
    <section className="story">
      <div className="story-content">
        <h2>Our Story</h2>
        <p>
          IRTAQA Design Company was established in 2015 with a vow for the drive
          & commitment for the pursuit of excellence and absolute quality
          focused services in the field of Construction & Engineering. Today,
          living up to the promise and commitment made over one decade ago,
          IRTAQA Design proudly stands as one of Pakistan’s leading Construction
          & Engineering Service Providers. Having successfully executed and
          handed over various commercial, residential, industrial, medical,
          institutional, iconic structures, steel fabricated structures,
          infrastructure and sensitive installation projects, IRTAQA Design has
          become the ‘go-to’ construction contractors for all developers,
          multi-national organizations / investors, large prominent group of
          companies to start-ups looking for cost effective yet quality driven
          construction and engineering services. By staying true to our core
          values, we have successfully forged exemplary business relationships
          built on strong foundations of trust, integrity and our capability to
          outperform targets. We believe in reinvesting in our teams, T&P and
          technology to deliver superior quality construction and engineering
          services to our treasured clients.
        </p>
        <h3>WE Are A Company of Having 8 Years Of Experience</h3>
        <p>
          IRTAQA Design Company today has evolved as a brand name in the field
          of Construction & Engineering representing quality and assurance of
          exceptional construction and related services. Whether you’re a
          client, employee, partner or a stakeholder, DCC is who you should be
          associated with.
        </p>
      </div>
      <div className="story-image">
        {/* Image tag here, assuming the image is locally stored in the project */}
        <img src="path-to-your-image.jpg" alt="Our Story" />
      </div>
    </section>
  );
};

export default StorySection;
