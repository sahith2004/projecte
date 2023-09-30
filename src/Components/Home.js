import React, { useEffect, useRef } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import lottie from "lottie-web";
// Import your animation CSS file if you have one

const Home = () => {
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
      animationData: require('./banner.json')
    });
  }, []);

  return (
    <div className="home-container">

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
          Discover the perfect path to excel in the EAMCET exam
          </h1>
          <p className="primary-text">
            
"Embark on a successful EAMCET journey with our self-paced, IITians-led 45-day course, thoughtfully integrated with the IPE curriculum for excellence."
          </p>
          <button className="secondary-button">
            Join Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section container" ref={container}></div>
      </div>
    </div>
  );
};

export default Home;
