import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";

export default function Layout() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <CommonFooter />
    </div>
  );
}
