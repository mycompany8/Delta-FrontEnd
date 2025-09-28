import React from "react";

import logo from "../../../../../../public/Images/DeltaImage.png";
import Input from "../../../../../common/components/input/Input";
import Button from "../../../../../common/components/button/Button";
import SelectBox from "../../../../../common/components/input/SelectBox";

function MenuHeader() {
  const productCatogery = [
    { name: "All" },
    { name: "Pastries" },
    { name: "Breads" },
    { name: "Chips" },
    { name: "Cakes" },
    { name: "Biscuits" },
  ];
  return (
    <>
      <div className="  bg-tertiary h-[280px]  w-[100vw] ">
        <img
          src={logo}
          className="w-[220px] hidden sm:block absolute top-7  h-[150px]"
          alt=""
        />
        <div className="h-full w-full text-center flex flex-col px-3 sm:p-0 justify-center items-center">
          <h1 className=" text-4xl sm:text-6xl font-extrabold">Our Complete Menu</h1>
          <p className="font-normal text-xl text-neutral-secondary p-2">
            Discover our full range of artisanal pastries, breads, and desserts,
            all baked <br />
            fresh daily with premium ingredients
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-y-2 h-full min-h-[100px] p-2  bg-background-primary w-[100vw] ">
        <div className="px-5 w-full block sm:hidden">
          <Input
            className={
              "text-xs  p-3  w-full  "
            }
            placeholder={"Search products.."}
          />
        </div>
        <div className="w-full">
          <div className=" flex h-full px-5 sm:px-20 overflow-auto  sm:items-center gap-x-3">
            {productCatogery.map((item) => (
              <Button
                className={
                  "bg-background-secondary hover:bg-primary text-neutral-primary hover:text-white"
                }
                name={item?.name}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex sm:justify-center items-center sm:p-0 px-5 gap-x-3">
          <Input
            className={
              "text-xs hidden sm:block p-2 sm:px-2 w-[200px] sm:w-[300px]"
            }
            placeholder={"Search products.."}
          />
          <SelectBox className={'w-full sm:w-[100px] sm:p-2 p-3'} />
        </div>
      </div>
    </>
  );
}

export default MenuHeader;
