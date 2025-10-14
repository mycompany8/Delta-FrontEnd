import React, { useEffect, useRef, useState } from "react";
import facebook from "../../../../public/Images/facebook.png";
import instagram from "../../../../public/Images/Instagram.png";
import menu from "../../../../public/Images/menu.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const handleScroll = () => {
    var middle = window.innerHeight / 2;
    if (window.scrollY >= middle) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      var middle = window.innerHeight / 2;
      if (window.scrollY >= middle) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Menu",
      url: "/menu",
    },
    {
      name: "Gallery",
      url: "/menu",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="w-[100vw] sticky top-0 flex items-center py-3 sm:py-0  bg-black/80">
      {" "}
      <div
        className={` w-full bg-black/80   md:flex justify-end items-center px-10 py-4 transition-colors duration-500 ${
          isScrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="hidden sm:block">
          <ul className="flex space-x-5  ">
            {data.map((item, i) => (
              <li
                onClick={() => navigate(item.url)}
                className="text-white  font-roboto font-medium text-base leading-6"
              >
                {item.name}
              </li>
            ))}

            <ul className="flex space-x-2">
              <li>
                <img src={facebook} alt="Facebook" />
              </li>
              <li>
                <img src={instagram} alt="Instagram" />
                
              </li>
              
            </ul>
          </ul>
        </div>
      </div>
      <div className="block sm:hidden pr-6">
        <img src={menu} className="w-8 h-8" alt="Instagram" />
      </div>
    </div>
  );
}

export default Header;
