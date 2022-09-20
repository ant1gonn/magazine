import React from "react";
import BasketIMG from "./../../images/Frame.png";
import PackageIMG from "./../../images/Frame.png";
import { BasketProduct } from "./BasketProduct";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearBasket,
  deleteBasketProduct,
} from "../../redux_toolkit/basket_slice";

export const Basket = () => {
  const { items, totalPrice } = useSelector(({ basket }) => basket);
  const dispatch = useDispatch();

  const itemsArray = Array.from(items);

  const clearToBasket = () => {
    window.confirm("Вы действительно хотите удалить все товары из корзины?") &&
      dispatch(clearBasket());
  };

  return (
    <div className="basket">
      <div>
        <strong>Корзина</strong>
        <span style={{ cursor: "pointer" }} onClick={clearToBasket}>
          Очистить корзину
        </span>
      </div>
      <div className="basket_price">
        <div>Xiaomi</div>
        <div>
          Стоимость корзины:
          <div>{totalPrice}р</div>
        </div>
        <button>
          <Link to="/order">Оформить</Link>
        </button>
        <div>
          <img src={PackageIMG} />
          <img src={BasketIMG} />
        </div>
      </div>
      <div className="basket_products">
        {itemsArray.map((item) => {
          return <BasketProduct key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
