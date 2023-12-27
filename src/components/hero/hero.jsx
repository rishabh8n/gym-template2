import React from "react";
import Header from "../header/header";
import "./hero.css";

const Hero = () => {
  return (
    <div id="home">
      <Header />
      <div id="hero">
        <div className="container hero_container">
          <div className="column">
            <p className="fs-700">SHAPE YOUR BODY</p>
            <h1 className="fs-900 fw-bold">
              BE <span className="text-accent-400">STRONG</span> TRAIN HARD
            </h1>
            <button className="button hero_action-btn | fs-500 fw-medium text-neutral-100 bg-accent-400">
              GET INFO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
