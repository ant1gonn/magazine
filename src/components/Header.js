import React from "react";
import MapIMG from "./../images/Group642.png";
import SearchIMG from "./../images/Group643.png";
import BasketIMG from "./../images/Basket.png";
import AvaIMG from "./../images/ava.png";
import LogoIMG from "./../images/React.png";
import { BannerAd } from "./Banner/BannerAd";
import { Link } from "react-router-dom";

export const Header = ({ value, setValue, onClickSearch }) => {
  return (
    <div className="header">
      <div className="header_inner">
        <div>
          <Link to="/">
            <img src={LogoIMG} alt="logo" />
          </Link>
        </div>
        <div>
          <img src={MapIMG} />
          <span>Александровск-Са...</span>
        </div>
        <div className="header__search">
          <input
            className="header_inp"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Поиск бренда, товара, категории..."
          />
          <img
            style={{ cursor: "pointer" }}
            onClick={onClickSearch}
            src={SearchIMG}
          />
        </div>
        <Link to="/basket">
          <img src={BasketIMG} />
        </Link>
        <Link to="/history">
          <img src={AvaIMG} />
        </Link>
      </div>
      <div className="banner_ad">
        <BannerAd />
      </div>
    </div>
  );
};
