import React from "react";
import Banner from "../assets/banner-image.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h3>*READ IT CAREFULLY</h3>
      <h1 className="main-title">Y U NO BUY ?</h1>
      <img src={Banner} alt="Banner" width="20rem" />
    </div>
  );
}

export default Home;
