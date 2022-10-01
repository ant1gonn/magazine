import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Mian/Main";
import { Basket } from "./components/Basket/Basket";
import { useSelector } from "react-redux";
import { Order } from "./components/Order/Order";

const App = () => {
  const [value, setValue] = React.useState("");
  const { items } = useSelector(({ main }) => main);

  const itemArray = Array.from(items);

  // const filterName =

  const onClickSearch = () => {
    return itemArray.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
  };

  return (
    <div>
      <Header value={value} setValue={setValue} onClickSearch={onClickSearch} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main itemArray={itemArray} />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
