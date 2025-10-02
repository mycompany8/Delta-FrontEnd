import React from "react";
import back_arrow from "../../../../public/Images/back_arrow.png";
function DetailPageHeader() {
  return (
    <>
      <div className=" flex justify-around border-b border-neutral-100  items-center w-[100vw] py-3">
        <div className="flex items-center gap-x-4">
          <img src={back_arrow} alt="" />
          <h1>Back</h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Delta Bakery</h1>
        </div>
        <div>
          <h1>share</h1>
        </div>
      </div>
    </>
  );
}

export default DetailPageHeader;
