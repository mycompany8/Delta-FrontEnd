import React from "react";
import back_arrow from "../../../../public/Images/back_arrow.png";
import share from "../../../../public/Images/share.png";
import { useNavigate } from "react-router-dom";
function DetailPageHeader() {
  const navigate=useNavigate()
  return (
    <>
      <div className=" flex justify-around border-b border-neutral-100  items-center w-[100vw]  py-4">
        <div className="flex items-center gap-x-2">
          <img className="cursor-pointer" onClick={()=>navigate(-1)} src={back_arrow} alt="" />
         <h1>|</h1>
          <h1>Back</h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Delta Bakery</h1>
        </div>
        <div className="flex gap-x-2 items-center">
          <img src={share} alt="" />
          <h1>share</h1>
        </div>
      </div>
    </>
  );
}

export default DetailPageHeader;
