import React from "react";
import Package from "./../../images/Frame.png";

export const BannerAd = () => {
  return (
    <div>
      <img src={Package} />
      <span>Получай товары БЕСПЛАТНО!</span>
      <button>Узнать подробнее</button>
    </div>
  );
};
