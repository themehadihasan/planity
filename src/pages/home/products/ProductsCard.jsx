import React from "react";
import "../../home/products/ProductsCard.css";
import CartIcon from "../../../assets/cart.png";

const ProductsCard = ({ cardImage, name, price }) => {
  return (
    <div className="productsCard">
      <div className="productImage">
        <img src={cardImage} alt="Product Image" />
      </div>
      <div className="productDescription">
        <span className="productDescriptionContent">
          <h4>{name}</h4>
          <p>
            $<b>{price}</b>
          </p>
        </span>
        <span className="productDescriptionImage">
          <img src={CartIcon} alt="Cart Icon" />
        </span>
      </div>
    </div>
  );
};

export default ProductsCard;
