import React from "react";
import { Menu } from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { MainProduct } from "./MainProduct";
import {
  fetchProducts,
  addNewProducts,
} from "./../../redux_toolkit/main_slice";
import { addBasketProduct } from "../../redux_toolkit/basket_slice";
import axios from "axios";

export const Main = () => {
  const [newProducts, setNewProducts] = React.useState([]);
  const { items, status } = useSelector(({ main }) => main);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(`https://629ef7298b939d3dc28b2d3b.mockapi.io/magazine?page=1`)
      .then((res) => setNewProducts(res.data));
  }, [newProducts]);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addBasket = (obj) => {
    dispatch(addBasketProduct(obj));
  };

  const addProducts = () => {
    return items.push({ ...newProducts });
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
                {items.map((item) => {
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
