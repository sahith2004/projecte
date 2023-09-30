import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";

// Import your components here
import Home from "./Home.js";
import About from "./About.js";
import Testimonial from "./Testimonial.js";
import Contact from "./Contact.js";

const Navbar = () => {
  return (

      <nav>
        <div className="nav-logo-container">
          <h1>
            Lear<span className="nix-color">nix</span>
          </h1>
        </div>
        <div className="navbar-links-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/team">Our Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <button className="primary-button">Join Now</button>
        </div>
      </nav>

    
  );
};

export default Navbar;
