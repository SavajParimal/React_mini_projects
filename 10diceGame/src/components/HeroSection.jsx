import React from "react";
import dice from "../assets/dice.png";

function HeroSection() {
  return (
    <>
      <div className="hero">
        <div className="img">
          <img src={dice} alt="dice" />
        </div>
        <div className="text">
          <p>DICE GAME</p>
          <a href="#gameSection">
          <button>play now</button></a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
