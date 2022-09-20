import React from "react";
import ProductIMG from "./../../images/Frame642.png";

export const MainProduct = ({
  id,
  name,
  image,
  price,
  prevPrice,
  procent,
  addBasket,
}) => {
  return (
    <div className="main_product">
      <img style={{ width: "150px" }} src={image} />
      <div>{name}</div>
      <div>{price}p</div>
      <div>{prevPrice}p</div>
      <div>{procent}%</div>
      <button onClick={() => addBasket({ id, name, image, price })}>
        Добавить в корзину
      </button>
    </div>
  );
};
