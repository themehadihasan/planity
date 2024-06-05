import React from "react";
import "./SubHeroCard.css";

const SubHeroCard = ({
  subTitle,
  title,
  priceStart,
  price,
  buttonText,
  image,
}) => {
  return (
    <div className="subHeroCard">
      <div className="subHeroCardLeft">
        <p>{subTitle}</p>
        <h3>{title}</h3>
        <div>
          <h4 style={{ fontSize: "1.15rem" }}>
            {priceStart} <b>{price}</b>
          </h4>
        </div>
        <button>{buttonText}</button>
      </div>
      <div className="subHeroCardRight">
        <img src={image} alt="Roses" />
      </div>
    </div>
  );
};

export default SubHeroCard;
