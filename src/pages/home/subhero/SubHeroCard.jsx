import React from "react";
import "./SubHeroCard.css";

const SubHeroCard = ({
  subTitle,
  title,
  priceStart = "",
  price = "",
  buttonText,
  image,
}) => {
  return (
    <div className="subHeroCard">
      <div className="subHeroCardLeft">
        <div className="subHeroCardLeftContent">
          <p>{subTitle}</p>
          <h3>{title}</h3>
          <div className="priceTag">
            <h4>
              {priceStart} <b>{price}</b>
            </h4>
          </div>
        </div>
        <div>
          <button>{buttonText}</button>
        </div>
      </div>
      <div className="subHeroCardRight">
        <img src={image} alt="Roses" />
      </div>
    </div>
  );
};

export default SubHeroCard;
