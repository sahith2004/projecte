import React, { useEffect, useRef } from "react";
import lottie from "lottie-web"; // Import the lottie library

const Work = () => {
  const workInfoData = [
    {
      animationData: require('./eamcet.json'), // Replace with your animation JSON file
      title: "Master EAMCET at Your Own Pace",
      text: "Gain mastery over EAMCET's 1st and 2nd-year syllabus while honing your objective problem-solving skills through our self-paced course",
    },
    {
      animationData: require('./ipe.json'), // Replace with your animation JSON file
      title: "Supercharge with IPE Fastrack",
      text: "As your intermediate exams approach, we provide concise concept reviews and fast-track IPE revisions to boost your confidence",
    },
    {
      animationData: require('./mentorship.json'), // Replace with your animation JSON file
      title: "Mentorship Sessions",
      text: "Elevate your EAMCET readiness with our one-on-one mentorship sessions, where experienced guides tailor their expertise to your unique learning needs",
    },
  ];

  useEffect(() => {
    // Load the corresponding Lottie animation for each item in workInfoData
    workInfoData.forEach((data, index) => {
      const container = document.querySelector(`#animation-container-${index}`);
      if (container) {
        container.innerHTML = "";
        lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data.animationData,
        });
      }
    });
  }, []); // Run this effect only once on component mount

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What we offer ?</h1>
       
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              {/* Create a container for each animation with fixed dimensions */}
              <div
                id={`animation-container-${index}`}
                className="animation-container"
                style={{ width: "300px", height: "200px" }}
              ></div>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
