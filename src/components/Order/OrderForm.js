import React from "react";

export const OrderForm = () => {
  return (
    <div claaaName="order__form">
      <div>
        Имя
        <div>
          <input className="order__form_inputs" />
        </div>
      </div>
      <div>
        Телефон
        <div>
          <input className="order__form_inputs" />
        </div>
      </div>
    </div>
  );
};
