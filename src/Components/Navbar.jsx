import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    var middle = window.innerHeight / 2;
    if (window.scrollY >= middle) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={`fixed top-0 left-0 w-full z-20 hidden md:flex justify-end items-center px-10 py-4 transition-colors duration-500 ${
          isScrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
        }`}
      >
        <ul className="flex space-x-5">
          <li>
            <Link to="/" className="text-white font-roboto font-medium text-base leading-6 hover:text-orange-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-roboto font-medium text-base leading-6 hover:text-orange-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-white font-roboto font-medium text-base leading-6 hover:text-orange-400 transition-colors">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white font-roboto font-medium text-base leading-6 hover:text-orange-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-2">
          <li><img src="/Images/facebook.png" alt="Facebook" /></li>
          <li><img src="/Images/Instagram.png" alt="Instagram" /></li>
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="absolute top-6 right-4 md:hidden z-20">
        <img src="/Images/Hamburger.png" className="w-10 h-10" alt="menu" />
      </div>

      {/* Logo fixed on top-left */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src="/Images/DeltaImage.png"
          className="w-24 h-14 md:w-28 md:h-20 lg:w-40 lg:h-24"
          alt="Delta Logo"
        />
      </div>
    </>
  );
}
