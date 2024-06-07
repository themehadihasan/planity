import React from "react";
import FeaturesImage from "../../../assets/featuresimage.png";
import "../features/Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="featuresLeft">
        <img src={FeaturesImage} alt="Features Image" />
      </div>
      <div className="featuresRight">
        <h1>
          We have made the beauty of plants one of the most beautiful features
          in your home.
        </h1>
        <p>
          A cozy home is a home that in decorated with the freshness of green
          and fresh plants.
        </p>
      </div>
    </div>
  );
};

export default Features;
