import React, { useEffect, useRef } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import lottie from "lottie-web";
const About = () => {
  const container = useRef(null);

  useEffect(() => {
    // Clear any previous animations before loading a new one
    if (container.current) {
      container.current.innerHTML = "";
    }

    lottie.loadAnimation({
      container: container.current,
      renderer: "svg", // Use "svg" as the renderer
      loop: true,
      autoplay: true,
      animationData: require('./about.json')
    });
  }, []);
  return (
    <div className="about-section-container">
     
      <div className="about-section-image-container container" ref={container}>
        
      </div>
      <div className="about-section-text-container">
       
        <h1 className="primary-heading">
          Our Schedule
        </h1>
        <p className="primary-text">
          December 22nd  - January 31st
        </p>
        <p className="primary-text">
          Feb 1st - March 20th 
        </p>
        <p className="primary-text">
          Feb 20th - Eamcet Final Exam Date
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Join Now</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
