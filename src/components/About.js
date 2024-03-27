import React from "react";
import "../styles/About.css";
import AboutLogo from "../assets/about-logo.png";

function About() {
  return (
    <div id="about" className="about">
      <img src={AboutLogo} alt="About Logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
        vestibulum felis, quis dapibus justo ultricies at. Nulla facilisi.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae.
      </p>
    </div>
  );
}

export default About;
