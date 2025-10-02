import React from "react";
import Button from "../../../../../../common/components/button/Button";

function ProductDescription() {
  return (
    <div className=" w-[100vw] h-full space-y-7 p-12 ">
      <div className="w-full flex py-5 border-b border-neutral-gray1 ">
        <h1>icon</h1>
        <h1>Description</h1>
      </div>
      <div className="w-full h-full mt-9 flex ">
        <div className="w-2/3 space-y-6 leading-relaxed">
          <div className=" space-y-3 leading-relaxed">
            <h1 className="text-3xl font-semibold">About Our Cinnamon Rolls</h1>
            <p className="text-lg">
              Our signature cinnamon rolls are a labor of love, crafted using a
              time-honored recipe that has been perfected over generations. Each
              roll begins with our enriched dough, made with organic flour,
              farm-fresh eggs, and European-style butter, creating the perfect
              tender and fluffy texture.
            </p>
            <p className="text-lg">
              The magic happens in the filling - we use premium Ceylon cinnamon
              blended with organic brown sugar and a hint of vanilla. The rolls
              are then baked to golden perfection and finished with our
              house-made cream cheese frosting that melts beautifully into every
              spiral.
            </p>
          </div>
          <div className="space-y-3">
            <h1 className=" text-lg font-semibold">Ingredients</h1>
            <div className="flex gap-x-4 text-base">
              <div className="div">
                <div className="flex gap-x-2">
                  <h1 className="">icon</h1>
                  <h1 className="text-lg">Organic unbleached flour</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1>icon</h1>
                  <h1 className="text-lg">Organic unbleached flour</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1>icon</h1>
                  <h1 className="text-lg">Organic unbleached flour</h1>
                </div>
              </div>
              <div className="div">
                <div className="flex gap-x-2">
                  <h1 className="">icon</h1>
                  <h1 className="text-lg">Organic unbleached flour</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1>icon</h1>
                  <h1 className="text-lg">Organic unbleached flour</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1>icon</h1>
                  <h1 className="text-lg">Organic unbleached flour</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="div h-[136px] flex items-center px-5 bg-tertiary">
              <div className="space-y-3">
                <div className="flex gap-x-2">
                  <h1>icon</h1>
                  <h1>Allergen Information</h1>
                </div>
                <p>
                  Contains: Wheat, Eggs, Dairy. May contain traces of nuts and
                  soy. Prepared in a facility that processes tree nuts.
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-3">
            <h1 className="text-lg font-medium space-y-6">
              Storage Instructions
            </h1>
            <div className="space-y-1">
                <div className="flex gap-x-2">
              <h1>icon</h1>
              <h1>Organic unbleached flour</h1>
            </div>
            <div className="flex gap-x-2">
              <h1>icon</h1>
              <h1>Organic unbleached flour</h1>
            </div>
            <div className="flex gap-x-2">
              <h1>icon</h1>
              <h1>Organic unbleached flour</h1>
            </div>
            </div>
          </div>
        </div>

        <div className=" p-10 w-1/3">
          <div className=" space-y-3">
            <div className="bg-tertiary p-6 space-y-4 ">
              <div className="flex gap-x-3">
                <h1>icon</h1>
                <h1>Enquire Now</h1>
              </div>
              <p>
                Interested in this product? Get in touch with us for
                availability and bulk orders.
              </p>
              <div>
                <div className="flex gap-x-3">
                  <h1>icon</h1>
                  <h1>Response within 2 hours</h1>
                </div>
                <div className="flex gap-x-3">
                  <h1>icon</h1>
                  <h1>Response within 2 hours</h1>
                </div>
                <div className="flex gap-x-3">
                  <h1>icon</h1>
                  <h1>Response within 2 hours</h1>
                </div>
              </div>
              <div>
                <Button className={"w-full text-white bg-primary"} name={"Enquiry Now"} />
              </div>
            </div>
            <div className="mt-5 bg-tertiary p-6">
              <h1>Business Hours</h1>
              <div>
                <div className="flex justify-between">
                  <h1>Monday - Friday</h1>
                  <h1>7:00 AM - 7:00 PM</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Monday - Friday</h1>
                  <h1>7:00 AM - 7:00 PM</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Monday - Friday</h1>
                  <h1>7:00 AM - 7:00 PM</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
