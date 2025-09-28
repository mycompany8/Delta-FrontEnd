import React from "react";

import productImabe from "../../../../../public/Images/product.png";

function ProductViewCard({
  image,
  name,
  description,
  ingredients,
  catogery,
  price,
}) {
  return (
    <>
      <div className=" w-[166.5px] h-full  min-h-[380px] sm:w-[405.328125px] flex flex-col sm:h-[633.328125px] leading-relaxed shadow-md rounded-lg ">
        <div className="h-2/3 ">
          <img
            className="h-full object-cover w-full rounded-t-lg"
            src={image}
            alt=""
          />
        </div>
        <div className=" h-full  leading-relaxed p-2 sm:p-5">
          <div className="flex justify-between">
            <h1 className="text-xl text-primary font-bold w-1/4">{name}</h1>
            <h1 className="text-xl text-primary font-semibold">{price}</h1>
          </div>
          <p>{description}</p>
          <span className="p-1 text-sm rounded-md bg-tertiary text-primary">
            {catogery}
          </span>
          <h1 className="text-sm font-normal text-neutral-gray1">
            Ingredients:
          </h1>
          <p className="text-neutral-gray1 text-sm font-normal">
            {ingredients}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductViewCard;
