import React from "react";
import "./SubHero.css";
import Roses from "../../../assets/roses-02.png";
import Monsera from "../../../assets/monsera01.png";
import GradenPlant from "../../../assets/peace-reverse.png";
import SubHeroCard from "./SubHeroCard";

const SubHero = () => {
  return (
    <div className="subHero">
      <h1>New arrivals in this week</h1>
      <div className="subHeroContent">
        <div className="subHeroLeft">
          <div className="subHeroLeftContent">
            <SubHeroCard
              subTitle="Big Sale Product"
              title="Plant for Interior Decoration"
              priceStart="Start From"
              price="$320"
              buttonText="SHOP NOW"
              image={Roses}
            />
          </div>
        </div>
        <div className="subHeroRight">
          <div className="subHeroRightTop">
            <SubHeroCard
              subTitle="New Category"
              title="Monsera"
              buttonText="SHOP NOW"
              image={Monsera}
            />
          </div>
          <div className="subHeroRightBottom">
            <SubHeroCard
              subTitle="New Product"
              title="Plant for Garden"
              buttonText="SHOP NOW"
              image={GradenPlant}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
