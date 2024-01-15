import React, { useState } from "react";
import "./ourstorysummary.css";

const OurStorySummary = () => {
  const [buttonState, setButtonState] = useState(0);

  const handleButtonClick = (val) => {
    setButtonState(val);
  };

  return (
    <div className="our-story-summary-outer">
      <div className="headings">
        <h4>WE GREW FROM ZERO!</h4>
        <h2>Our Story</h2>
      </div>
      <div className="our-story-summary-inner">
        <div className="our-story-summary-inner-section">
          <div className="our-story-summary-inner-section-buttons">
            <button
              onClick={() => handleButtonClick(0)}
              className={buttonState === 0 ? "active1" : ""}
            >
              Why Us?
            </button>
            <button
              onClick={() => handleButtonClick(1)}
              className={buttonState === 1 ? "active1" : ""}
            >
              CEO Message
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              className={buttonState === 2 ? "active1" : ""}
            >
              Our Expertise
            </button>
            <button
              onClick={() => handleButtonClick(3)}
              className={buttonState === 3 ? "active1" : ""}
            >
              Our Story
            </button>
          </div>
          <div className="our-story-summary-inner-section-message">
            {buttonState === 0 && (
              <div>
                <h2>Why Choose Us?</h2>
                <p>
                  IRTAQA DESIGNS has diversified experience of multi storey
                  building, infrastructure, interior designing, value
                  engineering and project management. In over 33 years of
                  experience we have been building life time relationships with
                  our clients through our services under supervisions of
                  professionals.
                </p>
              </div>
            )}
            {buttonState === 1 && (
              <div>
                <h2>CEO Message</h2>
                <p>
                  We at IRTAQA Design consider ourselves not just mere
                  contractors; but partners of our valuable clients offering:
                  Highest Standard of Quality Construction Value Added
                  Construction Services & Facilities Procurement and
                  Installation of resources for civil, mechanical and steel
                  fabricated structures & finishing. Each project is of the
                  highest importance to us just as it is to our treasured
                  client. Over the last 1 decade, we at IRTAQA Design have
                  maintained an upward graph for growth and sustainability into
                  our emergence as one of the most well-reputed, well-recognized
                  and a trustworthy brand name in the field of civil
                  construction in Pakistan.
                </p>
              </div>
            )}
            {buttonState === 2 && (
              <div>
                <h2>Our Expertise</h2>
                <p>
                  IRTAQA Design has diversified experience of multi storey
                  building, infrastructure, interior designing, value
                  engineering and project management. In over 8 years of
                  experience we have been building life time relationships with
                  our clients through our services under supervisions of
                  professionals.
                </p>
              </div>
            )}
            {buttonState === 3 && (
              <div>
                <h2>Our Story</h2>
                <p>
                  IRTAQA Design Company was established in 2015 with a vow for
                  the drive & commitment for the pursuit of excellence and
                  absolute quality focused services in the field of Construction
                  & Engineering. Today, living up to the promise and commitment
                  made over one decade ago, IRTAQA Design proudly stands as one
                  of Pakistan’s leading Construction & Engineering Service
                  Providers. Having successfully executed and handed over
                  various commercial, residential, industrial, medical,
                  institutional, iconic structures, steel fabricated structures,
                  infrastructure and sensitive installation projects,
                </p>
              </div>
            )}
          </div>
          <div className="our-story-summary-inner-section-background"></div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySummary;
