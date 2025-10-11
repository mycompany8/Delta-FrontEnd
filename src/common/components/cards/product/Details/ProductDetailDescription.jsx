import React from "react";
import Button from "../../../../../common/components/button/Button";

import gmail from "../../../../../../public/Images/gmail.png";
function ProductDetailDescription({
  title,
  description,
  rating,
  reviews,
  features = [],
  sizes = [],
  buttonLabel,
  onButtonClick,
  name,
  catogeries,
  className,
}) {
  return (
    <div className="flex flex-col gap-y-7">
      {/* Title + Description */}
      <div className="">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="mt-4 text-neutral-gray1 text-xl w-[370px] sm:w-[600px] font-normal">
          {description}
        </p>
      </div>

      <div className={`space-y-5 `}>
        <div className=" overflow-auto  w-full">
          {name == "festivel" ? (
            <div className="flex gap-x-3 ">
              {catogeries.map((item, i) => (
                <div
                  className={`${item?.color} items-center  flex h-10  sm:h-7 gap-x-1 sm:gap-x-3 text-sm rounded-xl py-1  px-4`}
                >
                  <img
                    className="w-3 h-3 object-cover"
                    src={item.icon}
                    alt=""
                  />
                  <h1 className="text-xs sm:text-sm">{item.description}</h1>
                </div>
              ))}
            </div>
          ) : (
            <h1>
              {" "}
              srtarsss ({rating}) • {reviews} reviews
            </h1>
          )}
        </div>
        <div className={`${className}`}>
          {name === "festivel" && (
            <h1 className="text-primary font-semibold text-lg">Key Features</h1>
          )}
          {features.map((feature, idx) => (
            <div key={idx} className={`flex  items-center gap-x-3`}>
              <img
                className="w-3 h-3 object-cover"
                src={feature?.icon}
                alt=""
              />

              <h1 className=" text-base font-light">{feature?.description}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 space-y-5">
        <h1>Size Options</h1>
        <div className="flex gap-x-3 ite justify-between">
          {sizes.map((size, idx) => (
            <div
              key={idx}
              className="h-[80px] flex flex-col justify-center hover:bg-tertiary hover:border-primary rounded border-neutral-gray3 px-5 w-full border"
            >
              <h1 className="text-sm font-semibold">{size.label}</h1>
              <h1 className="text-sm">{size.value}</h1>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Button
          className={"bg-primary text-white w-full"}
          name={buttonLabel}
          onClick={onButtonClick}
          image={gmail}
        />
      </div>
    </div>
  );
}

export default ProductDetailDescription;
