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

  const filterName = itemArray.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <Header value={value} setValue={setValue} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main filterName={filterName} />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
