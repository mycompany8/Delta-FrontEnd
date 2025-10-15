import React from "react";

import productImabe from "../../../../../public/Images/product.png";
import Button from "../../button/Button";

function ProductViewCard({
  image,
  name,
  description,
  ingredients,
  catogery,
  price,
  className,
  festivel,
  btnname,
  menu
}) {
  return (
    <>
      <div
        className={` ${className}   flex flex-col leading-relaxed shadow-xl rounded-xl  h-full`}
      >
        <div className=" h-2/3  ">
          <img
            className="h-full object-center w-full rounded-t-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className=" h-full space-y-1   leading-relaxed p-2 sm:p-5">
          {!festivel ? (
            <div className="flex justify-between  ">
              <h1 className="text-xl text-primary font-bold w-1/4">{name}</h1>
              <h1 className="text-xl text-primary font-semibold">{price}</h1>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-xl text-primary font-bold w-1/4">{name}</h1>

              <div className="flex justify-between items-center ">
                <h1 className="text-base text-primary font-semibold">
                  {price}
                </h1>
                {festivel && (
                  <Button
                    className={"bg-primary text-sm   text-white"}
                    name={btnname}
                  />
                )}
              </div>
            </div>
          )}
          <p>{description}</p>
          <span className="p-1 text-sm rounded-md bg-tertiary text-primary">
            {catogery}
          </span>
          {ingredients && (
            <h1 className="text-sm font-normal text-neutral-gray1">
              Ingredients:
            </h1>
          )}

          <p className="text-neutral-gray1 text-sm font-normal">
            {ingredients}
          </p>
          {!festivel && !menu && (
            <Button className={"bg-primary w-full  text-white"} name={btnname} />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductViewCard;
