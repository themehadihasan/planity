import React from "react";
import "../hero/Hero.css";
import RightImage from "../../../assets/peace.png";
import ShortCardImage from "../../../assets/peace-reverse.png";
import LineImage from "../../../assets/line-2.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="lineBackground">
          <img src={LineImage} alt="Line Image" />
        </div>
        <div className="heroLeft">
          <h1>
            Make your <br /> home <br />
            <span>beautiful</span> <br />
            with plants
          </h1>
          <p>
            A cozy home is a home decorated with the freshness of green and
            fresh plants, come on, check out all our plants, don't run out.
          </p>
          <button>Learn More</button>
        </div>
        <div className="heroRight">
          <div className="heroRightLeft">
            <img src={RightImage} alt="Plant-Image" />
          </div>
          <div className="shortCard">
            <span className="shortCardContent">
              <h4>Pisum Sativum</h4>
              <p>Monsera</p>
              <button>LEARN MORE</button>
            </span>
            <span className="shortCardImage">
              <img src={ShortCardImage} alt="Short Card Image" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
