import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/nonauth/home/Home";
import MenuLayout from "./Pages/nonauth/menu/MenuLayout";

function Routeree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<MenuLayout />}></Route>
      </Routes>
    </div>
  );
}

export default Routeree;
