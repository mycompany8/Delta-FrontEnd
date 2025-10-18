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
        <div className="h-full space-y-2 leading-relaxed p-3 sm:p-4 md:p-5">
          {!festivel ? (
            <div className="flex justify-between items-start">
              <h1 className="text-lg sm:text-xl text-neutral-secondary font-semibold w-full pr-2">
                {name}
              </h1>
              <h1 className="text-lg sm:text-xl text-primary font-semibold whitespace-nowrap">{price}</h1>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-lg sm:text-xl text-neutral-secondary font-semibold w-full">
                {name}
              </h1>

              <div className="flex justify-between items-center">
                <h1 className="text-base sm:text-lg text-primary font-semibold">
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
          <p className="text-xs sm:text-sm font-light leading-relaxed">{description}</p>
          <div className="">
           <span className="px-2 py-1 text-xs sm:text-sm rounded-md bg-tertiary text-secondary"> {catogery}</span>
          </div>
          {ingredients && (
            <div>
              <h2 className="text-xs sm:text-sm font-normal text-neutral-gray1 mb-1">
                Ingredients:
              </h2>
              <p className="text-neutral-gray1 text-xs sm:text-sm font-normal leading-relaxed">
                {ingredients}
              </p>
            </div>
          )}
          {!festivel && !menu && (
            <Button
              className={"bg-primary w-full text-white text-sm sm:text-base py-2 sm:py-3"}
              name={btnname}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductViewCard;
