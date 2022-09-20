import React from "react";
import { useSelector } from "react-redux";

export const OrderPrices = () => {
  const { totalPrice } = useSelector(({ basket }) => basket);

  return (
    <div className="order__prices">
      <div className="order__prices-inner">
        <div>
          <span>Стоимость товаров:{totalPrice} р</span>
        </div>
        <div>
          <span>Стоимость доставки: 0 р</span>
        </div>
        <div>
          <span>Итого:</span>
          <strong>{totalPrice} р</strong>
        </div>
      </div>
      <button className="my_btn">Сделать заказ</button>
    </div>
  );
};
