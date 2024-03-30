import React from "react";
import "../styles/About.css";
import AboutLogo from "../assets/about-logo.png";

function About() {
  return (
    <div id="about" className="about">
      <img src={AboutLogo} alt="About Logo" />
      <p>
        Y U NO RICH? <br /> <br /> $YUNO ain't your mama's stock market. It's
        the memecoin where the only thing thicker than your FOMO is your
        potential stack of $YUNO. We're talkin' memes so legendary, your
        grandkids will be asking "Y U NO BUY $YUNO?"
        <br /> <br /> Disclaimer: $YUNO may or may not be real money. It may or
        may not make your dreams come true. But hey, at least you'll have a
        hilarious story to tell your therapist.
      </p>
    </div>
  );
}

export default About;
