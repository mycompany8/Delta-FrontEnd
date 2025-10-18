import React from "react";

import logo from "../../../../../../public/Images/DeltaImage.png";
import Input from "../../../../../common/components/input/Input";
import Button from "../../../../../common/components/button/Button";
import SelectBox from "../../../../../common/components/input/SelectBox";
import { useGetCatogery } from "../../../../../hooks/nonauth/catogery/useCatogery";

function MenuHeader({ formik, setCatogery }) {
  const { data: catogerys } = useGetCatogery();
  console.log(catogerys, "catogerys");
  return (
    <>
      <div className="bg-tertiary h-[200px] sm:h-[250px] md:h-[280px] mt-4 sm:mt-6 md:mt-10 w-[100vw] relative bg-cover bg-center bg-no-repeat border-b border-gray-200 px-[48px]">
        <img
          src={logo}
          className="absolute left-4 sm:left-6 md:left-10 top-4 sm:top-6 md:top-9 z-50 w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-[184px] lg:h-[112px]"
          alt="Delta Bakery Logo"
        />
        <div className="h-full w-full text-center space-y-2 sm:space-y-4 flex flex-col px-4 sm:px-6 md:px-8 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-neutral-secondary font-extrabold leading-tight">
            Our Complete Menu
          </h1>
          <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray1 leading-relaxed max-w-4xl">
            Discover our full range of artisanal pastries, breads, and desserts,
            all baked fresh daily with premium ingredients
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-y-2 h-full min-h-[80px] sm:min-h-[100px] p-2 sm:p-4 bg-[#F9FAFB] w-[100vw]">
        <div className="px-3 sm:px-5 w-full block sm:hidden">
          <Input
            className={"text-sm bg-white p-3 rounded-lg border border-gray-200 w-full"}
            placeholder={"Search products.."}
            handleChange={formik?.handleChange}
            handleBlur={formik?.handleBlur}
            values={formik?.values?.searchTerm}
            name={"searchTerm"}
          />
        </div>
        <div className="w-full sm:px-6 md:px-8 lg:px-[78px]">
          <div className="flex h-full px-3 sm:px-5 overflow-auto sm:items-center gap-x-2 sm:gap-x-3">
             <Button
                className={
                  "bg-background-secondary hover:bg-primary h-8 sm:h-[40px] px-3 sm:px-4 rounded-lg text-xs sm:text-sm text-neutral-primary hover:text-white whitespace-nowrap"
                }
                name={"all"}
                onClick={() => {
                  setCatogery(0);
                }}
              />
            {catogerys?.map((item) => (

              <Button
                className={
                  "bg-background-secondary hover:bg-primary h-8 sm:h-[40px] px-3 sm:px-4 rounded-lg text-xs sm:text-sm text-neutral-primary hover:text-white whitespace-nowrap"
                }
                name={item?.name}
                onClick={() => {
                  setCatogery(item?.id);
                }}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex sm:justify-center items-center sm:p-0 px-3 sm:px-5 gap-x-2 sm:gap-x-3">
          <Input
            className={
              "text-sm hidden sm:block py-3 bg-white px-4 w-[200px] sm:w-[250px] md:w-[300px] rounded-lg border border-gray-200"
            }
            placeholder={"Search products.."}
            handleChange={formik?.handleChange}
            handleBlur={formik?.handleBlur}
            values={formik?.values?.searchTerm}
            name={"searchTerm"}
          />
          <SelectBox className={"w-full bg-white sm:w-[120px] md:w-[130px] p-2 sm:p-3 rounded-lg border border-gray-200"} />
        </div>
      </div>
    </>
  );
}

export default MenuHeader;
