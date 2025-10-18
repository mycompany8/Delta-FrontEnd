import React from "react";

import Button from "../../button/Button";

function ProductViewCard({
  image,
  name,
  description,
  ingredients,
  catogery = "pastries",
  price=50,
  className,
  festivel,
  btnname,
  menu,
  onclick,
  imgStyle,
}) {
  return (
    <>
      <div
        className={` ${className}   flex flex-col leading-relaxed bg-white    shadow-xl rounded-xl  h-full`}
      >
        <div className={`${imgStyle} `} onClick={onclick}>
          <img
            className="h-full sm:max-h-[403.328125px] object-cover w-full rounded-t-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className=" h-full space-y-2   leading-relaxed p-2 sm:p-5">
          {!festivel ? (
            <div className="flex justify-between  ">
              <h1 className="text-xl text-neutral-secondary  font-semibold w-full">
                {name}
              </h1>
              <h1 className="text-xl text-primary font-semibold">{price}</h1>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-xl text-neutral-secondary  font-semibold w-full">
                {name}
              </h1>

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
          <p className="text-sm font-light">{description}</p>
          <h1 className="">
           <span className="px-2 text-xs   py-1  rounded-md bg-tertiary text-secondary"> {catogery}</span>
          </h1>
          {ingredients && (
            <h1 className="text-xs font-normal text-neutral-gray1">
              Ingredients:
            </h1>
          )}

          <p className="text-neutral-gray1 text-xs font-normal">
            {ingredients}
          </p>
          {!festivel && !menu && (
            <Button
              className={"bg-primary w-full  text-white"}
              name={btnname}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductViewCard;
