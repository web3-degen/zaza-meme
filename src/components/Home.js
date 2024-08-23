import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Home.css";
import AnimatedLogo from "../assets/videos/logo.mp4";

function Home() {
  return (
    <div id="home" className="home">
      <h1>Happy Birthday, Charlie.</h1>
      <h2>CA: EbZh3FDVcgnLNbh1ooatcDL1RCRhBgTKirFKNoGPpump</h2>
      <video className="logo-video" autoPlay loop muted playsInline>
        <source src={AnimatedLogo} type="video/mp4" />
      </video>
      <h3 className="left">What was your wish ?</h3>
      <h3 className="right">Smoke that zatavious and go to the moon.</h3>
    </div>
  );
}

export default Home;
