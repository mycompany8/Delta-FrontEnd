import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/nonauth/home/Home";
import MenuLayout from "./Pages/nonauth/menu/MenuLayout";
import ProductDetail from "./Pages/nonauth/productDetail/ProductDetail";
import FestivelDetailLayout from "./Pages/nonauth/festivelDetail/FestivelDetailLayout";

function Routeree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<MenuLayout />}></Route>
        <Route path="/product-detail" element={<ProductDetail />}></Route>
        <Route path="/festivel-detail" element={<FestivelDetailLayout />}></Route>
      </Routes>
    </div>
  );
}

export default Routeree;
