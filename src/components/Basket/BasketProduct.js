import React from "react";
import { useDispatch } from "react-redux";
import {
  addBasketProduct,
  deleteBasketProduct,
  minusBasketProduct,
  plusBasketProduct,
} from "../../redux_toolkit/basket_slice";

export const BasketProduct = ({ id, name, image, price, prevPrice, count }) => {
  const dispatch = useDispatch();

  const daleteProduct = (id) => {
    window.confirm("вы действительно хотите удалить товар?") &&
      dispatch(deleteBasketProduct(id));
  };

  const onClickPlus = () => {
    dispatch(addBasketProduct({ id }));
  };

  const onClickMinus = () => {
    if (count === 0) return;
    dispatch(minusBasketProduct({ id }));
  };

  return (
    <div className="basket_product">
      <img style={{ width: "100px" }} src={image} />
      <div>{name}</div>
      <button onClick={onClickMinus}>-</button>
      <div>{count}</div>
      <button onClick={onClickPlus}>+</button>
      <div>{price}</div>
      <div>{prevPrice}</div>
      <button onClick={daleteProduct}>delete</button>
      <img />
    </div>
  );
};
