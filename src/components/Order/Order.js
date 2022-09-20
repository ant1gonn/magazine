import React from "react";
import { OrderPrices } from "./OrderPrices";
import { OrderForm } from "./OrderForm";

export const Order = () => {
  return (
    <div>
      <h2>Доставка</h2>
      <div>
        <div>
          <h3>Когда доставить?</h3>
          <div>
            <span>Выберите дату</span>
            <span>Выберите время</span>
          </div>
        </div>
        <div>
          <h3>Куда доставить?</h3>
          <div>
            <img />
            <span>Выберите адрес доставки</span>
          </div>
        </div>
      </div>
      <div>
        <OrderForm />
      </div>
      <div>
        <OrderPrices />
      </div>
    </div>
  );
};
