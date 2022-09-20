import React from "react";
import { BannerAd } from "./BannerAd";
import banner from "./../../images/banner";
import banner1 from "./../../images/banner1";

export const Banner = () => {
  return (
    <div className="banner">
      <div>
        <BannerAd />
      </div>
      <img src={banner} />
      <img src={banner1} />
      <img src={banner} />
    </div>
  );
};
