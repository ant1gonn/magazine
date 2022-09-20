import React from "react";
import { OrderPrices } from "./OrderPrices";
import { OrderForm } from "./OrderForm";

export const Order = () => {
  return (
    <div className="order">
      <div className="order-inner">
        <div>
          <h2 className="">Доставка</h2>
          <div className="">
            <div className="">
              <h3 className="">Когда доставить?</h3>
              <div className="">
                <span>Выберите дату</span>
                <span>Выберите время</span>
              </div>
            </div>
            <div className="">
              <h3 className="">Куда доставить?</h3>
              <div className="">
                <img />
                <span>Выберите адрес доставки</span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <OrderPrices />
        </div>
      </div>
      <div className="">
        <OrderForm />
      </div>
    </div>
  );
};
