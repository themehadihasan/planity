import React from "react";
import "../products/Products.css";
import CactusCircle from "../../../assets/cactus-circle.png";
import MonseraCircle from "../../../assets/monser-circle.png";
import RosesCircle from "../../../assets/roses-circle.png";
import LilyCircle from "../../../assets/lily-circle.png";
import ProductsCard from "./ProductsCard";
import Cactus01 from "../../../assets/cactus01.png";
import Cactus02 from "../../../assets/cactus02.png";
import Cactus03 from "../../../assets/monsera.png";
import Cactus04 from "../../../assets/faux.png";
import Pisum01 from "../../../assets/pisum01.png";
import Pisum02 from "../../../assets/pisum02.png";
import Pisum03 from "../../../assets/pisum03.png";
import MiniGreen from "../../../assets/minigreen.png";

const Products = () => {
  const list = [
    {
      name: "Cactus",
      image: `${CactusCircle}`,
    },

    {
      name: "Rose",
      image: `${RosesCircle}`,
    },

    {
      name: "Lily",
      image: `${LilyCircle}`,
    },

    {
      name: "Monsera",
      image: `${MonseraCircle}`,
    },
  ];

  const productsCardContent = [
    {
      image: `${Cactus01}`,
      name: "Cactus Sam",
      price: 100.0,
    },

    {
      image: `${Pisum01}`,
      name: "Pisum Sativum",
      price: 210.0,
    },

    {
      image: `${MiniGreen}`,
      name: "Mini Green",
      price: 320.0,
    },

    {
      image: `${Cactus02}`,
      name: "Cactus Sam",
      price: 221.0,
    },

    {
      image: `${Pisum02}`,
      name: "Pisum Sativum",
      price: 210.0,
    },

    {
      image: `${Pisum03}`,
      name: "Pisum Sativum",
      price: 210.0,
    },

    {
      image: `${Cactus03}`,
      name: "Cactus Sam",
      price: 100.0,
    },

    {
      image: `${Cactus04}`,
      name: "Cactus Sam",
      price: 221.0,
    },
  ];

  return (
    <div className="products">
      <h1>
        Make your home <br />
        beautiful with plants
      </h1>
      <div className="productsList">
        <button className="buttonAll">All</button>
        {list.map((currEle, index) => {
          return (
            <button className="listButton" key={index}>
              <img src={currEle.image} alt="Flower List Image" />
              {currEle.name}
            </button>
          );
        })}
      </div>
      <div className="productsCardList">
        {productsCardContent.map((ele, ind) => {
          return (
            <ProductsCard
              key={ind}
              cardImage={ele.image}
              name={ele.name}
              price={ele.price}
            />
          );
        })}
      </div>
      <div className="showMore">
        <button className="showMoreButton">Show More</button>
      </div>
    </div>
  );
};

export default Products;
