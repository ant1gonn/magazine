import React from "react";
import ReactIMG from "./../images/React.png";
import VK from "./../images/Vk.png";
import Facebook from "./../images/Facebook.png";
import Instagramm from "./../images/Inst.png";
import GooglePlay from "./../images/Google Play.png";
import AppStore from "./../images/App Store.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer__logo">
          <Link to="/">
            <img src={ReactIMG} />
          </Link>
        </div>
        <div className="footer__links">
          <div>
            Присоединяйтесь к нам
            <div className="footer__social">
              <img src={Facebook} />
              <img src={VK} />
              <img src={Instagramm} />
            </div>
          </div>
          <div className="footer__apps">
            Устанавливайте приложение
            <div>
              <img src={GooglePlay} />
              <img src={AppStore} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
