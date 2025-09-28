import React from "react";
import instagram from "../../../../public/Images/Instagram.png";
import facebook from "../../../../public/Images/facebook.png";

function Footer() {
  return (
    <>
      <div className="bg-neutral-secondary w-[100vw] sm:h-[345px] h-full flex flex-col min-h-[345px]  ">
        <div className=" flex flex-wrap sm:flex-nowrap p-2 sm:p-10 h-full text-neutral-gray2 justify-around">
          <div className="div">
            <h1 className="text-2xl font-bold text-white">Delta Bakery</h1>
            <p className="text-base font-normal">
              Crafting moments of joy through <br /> artisanal baking since 2020
            </p>
          </div>
          <div className="div">
            <h1 className="text-lg text-white font-semibold">Quick Links</h1>
            <div>
              <h1 className="text-sm font-normal">About</h1>
              <h1 className="text-sm font-normal">About</h1>
              <h1 className="text-sm font-normal">About</h1>
              <h1 className="text-sm font-normal">About</h1>
              <h1 className="text-sm font-normal">About</h1>
            </div>
          </div>
          <div className="div">
            <h1 className="text-lg text-white font-semibold">Follow Us</h1>
            <div className="  ">
              <div className=" hover:p-1  w-[30px] h-[30px] ">
                <img className="  " src={instagram} alt="" />
              </div>
              <div className=" hover:p-1  w-[30px] h-[30px] ">
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
          <div className="div">
            <h1 className="text-lg text-white font-semibold">Contact Info</h1>
            <p>
              14/1005, Francis Rd, Thekepuram, <br /> Kuttichira, Kozhikode,
              Kerala 673003
            </p>
            <p> 0495 230 3727</p>
            <p>hello@deltabakery.com</p>
          </div>
        </div>
        <div className="px-20">
          <hr className="text-neutral-gray3  " />
        </div>
        <div className="flex justify-center items-center  p-5 h-full">
          <h1 className="text-neutral-gray3 text-center ">
            © 2025 Delta Bakery. All rights reserved. Made with ❤️ for bread
            lovers.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
