import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/nonauth/home/Home";
import MenuLayout from "./Pages/nonauth/menu/MenuLayout";
import ProductDetail from "./Pages/nonauth/productDetail/ProductDetail";
import FestivelDetailLayout from "./Pages/nonauth/festivelDetail/FestivelDetailLayout";
import ContactLayOut from "./Pages/nonauth/contact/ContactLayOut";
import AboutLayOut from "./Pages/nonauth/about/AboutLayOut";
import ServerError from "./Pages/nonauth/errors/serverError/ServerError";
import PageNotFound from "./Pages/nonauth/errors/pagenotfound/PageNotFound";

function Routeree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<MenuLayout />}></Route>
        <Route path="/product-detail" element={<ProductDetail />}></Route>
        <Route path="/festivel-detail" element={<FestivelDetailLayout />}></Route>
        <Route path="/contact" element={<ContactLayOut />}></Route>
        <Route path="/about" element={<AboutLayOut />}></Route>
        <Route path="/notfound" element={<PageNotFound />}></Route>
        <Route path="/servererror" element={<ServerError />}></Route>
      </Routes>
    </div>
  );
}

export default Routeree;
