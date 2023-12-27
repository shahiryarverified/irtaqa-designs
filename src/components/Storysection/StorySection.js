import React, { useState } from "react";
import "./style.css";
import image from "../../assets/image.jpg";
import image2 from "../../assets/image2.jpg";

const StorySection = () => {
  const [activeSection, setActiveSection] = useState("ceoMessage");

  return (
    // JSX for the "Our Story" section
    <section className="story">
      <div>
        <button
          className={
            "story-button " + (activeSection === "aboutUs" ? "active" : "")
          }
          onClick={() => setActiveSection("aboutUs")}
        >
          About Us
        </button>
        <button
          className={
            "story-button " + (activeSection === "expertise" ? "active" : "")
          }
          onClick={() => setActiveSection("expertise")}
        >
          Expertise
        </button>

        <button
          className={
            "story-button " + (activeSection === "ceoMessage" ? "active" : "")
          }
          onClick={() => setActiveSection("ceoMessage")}
        >
          CEO Message
        </button>
      </div>
      <div className="story-content-and-image">
        {activeSection === "ceoMessage" && (
          <div className="story-content">
            <h2>CEO Message</h2>
            <p>
              We at IRTAQA Design consider ourselves not just mere contractors;
              but partners of our valuable clients offering: Highest Standard of
              Quality Construction Value Added Construction Services &
              Facilities Procurement and Installation of resources for civil,
              mechanical and steel fabricated structures & finishing. Each
              project is of the highest importance to us just as it is to our
              treasured client. Over the last 1 decade, we at IRTAQA Design have
              maintained an upward graph for growth and sustainability into our
              emergence as one of the most well-reputed, well-recognized and a
              trustworthy brand name in the field of civil construction in
              Pakistan. Our clients are familiar with our transparent and
              partner like approach towards each project; free of costly delays,
              free of risk of conflict and guaranteed cost saving innovative
              construction methodologies approved and vetted by external
              Engineers and Consultants. At the heart of all our operations are
              our indispensable team members and work force, both on and off the
              field, who have the spirit to push boundaries every step of the
              way and foster a culture to accept challenges and embrace
              innovative thinking. We have embedded our Core Values and
              strategies to emphasize on QHSE in our DNA to deliver superior
              quality construction in the safest of manners; recognized and
              appreciated by our clients and workforce alike. We champion
              diverse talents, skills and backgrounds at DCC. Working together,
              we make a positive difference and continue to make sure that every
              project is the envy of the Country. I pay tribute to all our
              workforce, who we consider as an integral part of IRTAQA Design
              family, for not only being a part of, but also determined and
              striving to work towards IRTAQA Design.
            </p>
          </div>
        )}
        {activeSection === "expertise" && (
          <div className="story-content">
            <h2>Expertise</h2>
            <p>
              IRTAQA Design has diversified experience of multi storey building,
              infrastructure, interior designing, value engineering and project
              management. In over 8 years of experience we have been building
              life time relationships with our clients through our services
              under supervisions of professionals.
            </p>
          </div>
        )}
        {activeSection === "aboutUs" && (
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              IRTAQA Design Company was established in 2015 with a vow for the
              drive & commitment for the pursuit of excellence and absolute
              quality focused services in the field of Construction &
              Engineering. Today, living up to the promise and commitment made
              over one decade ago, IRTAQA Design proudly stands as one of
              Pakistan’s leading Construction & Engineering Service Providers.
              Having successfully executed and handed over various commercial,
              residential, industrial, medical, institutional, iconic
              structures, steel fabricated structures, infrastructure and
              sensitive installation projects, IRTAQA Design has become the
              ‘go-to’ construction contractors for all developers,
              multi-national organizations / investors, large prominent group of
              companies to start-ups looking for cost effective yet quality
              driven construction and engineering services. By staying true to
              our core values, we have successfully forged exemplary business
              relationships built on strong foundations of trust, integrity and
              our capability to outperform targets. We believe in reinvesting in
              our teams, T&P and technology to deliver superior quality
              construction and engineering services to our treasured clients.
            </p>
            <h3>WE Are A Company of Having 8 Years Of Experience</h3>
            <p>
              IRTAQA Design Company today has evolved as a brand name in the
              field of Construction & Engineering representing quality and
              assurance of exceptional construction and related services.
              Whether you’re a client, employee, partner or a stakeholder, DCC
              is who you should be associated with.
            </p>
          </div>
        )}
        <div className="story-image">
          <img
            src={activeSection !== "ceoMessage" ? image : image2}
            alt="Our Story"
          />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
