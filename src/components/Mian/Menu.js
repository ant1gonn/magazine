import React from "react";

export const Menu = () => {
  const menuArray = [
    "Игрушка",
    "Мартышка",
    "Мишка",
    "Подарок",
    "Подарок коллегам",
    "День Рождения Гриши",
  ];

  return (
    <div>
      Категории товаров
      <div className="menu_inner">
        {menuArray.map((item) => {
          return <button key={item}>{item}</button>;
        })}
      </div>
    </div>
  );
};
