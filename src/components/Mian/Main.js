import React from "react";
import { Menu } from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { MainProduct } from "./MainProduct";
import {
  fetchProducts,
  addNewProducts,
} from "./../../redux_toolkit/main_slice";
import { addBasketProduct } from "../../redux_toolkit/basket_slice";

export const Main = ({ filterName }) => {
  const { items, status } = useSelector(({ main }) => main);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addBasket = (obj) => {
    dispatch(addBasketProduct(obj));
  };

  const addProducts = () => {
    dispatch(addNewProducts());
  };

  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <div>
        {status === "error" ? (
          <h2>
            Ошибка загрузки товаров! Пожалуйства, перезагрузите страницу или
            загляните к нам попозже.
          </h2>
        ) : (
          <div>
            {status === "loading" ? (
              <div>loading...</div>
            ) : (
              <div className="main_products">
                {filterName.map((item) => {
                  return (
                    <MainProduct
                      addBasket={addBasket}
                      key={item.id}
                      {...item}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
        <button onClick={addProducts}>Показать больше товаров</button>
      </div>
    </div>
  );
};
