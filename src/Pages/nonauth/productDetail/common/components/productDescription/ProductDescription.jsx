import React from "react";
import Button from "../../../../../../common/components/button/Button";
import ProductAboutDetails from "../../../../../../common/components/cards/product/Details/ProductAboutDetails";

function ProductDescription() {
  return (
    <div className=" w-[100vw]  h-full space-y-7 sm:p-12 p-5   ">
      <div className="w-full h-full flex py-5 border-b border-neutral-gray1 ">
        <h1>icon</h1>
        <h1>Description</h1>
      </div>
      <div className="w-full h-full mt-9 flex flex-col gap-y-6 sm:flex-row ">
        <div className="sm:w-2/3 h-full ">
          <ProductAboutDetails
            aboutTitle="About Our Cinnamon Rolls"
            aboutParagraphs={[
              `Our signature cinnamon rolls are a labor of love, crafted using a time-honored
    recipe that has been perfected over generations. Each roll begins with our enriched dough,
     made with organic flour, farm-fresh eggs,
    and European-style butter, creating the perfect tender and fluffy texture.`,

              `The magic happens in the filling - we use premium Ceylon cinnamon blended with organic brown 
    sugar and a hint of vanilla. The rolls are then baked to golden perfection and
     finished with our house-made cream cheese frosting that melts beautifully into every spiral.`,
            ]}
            ingredients={[
              [
                "Organic unbleached flour",
                "Farm-fresh eggs",
                "European-style butter",
              ],
              [
                "Premium Ceylon cinnamon",
                "Organic brown sugar",
                "Vanilla extract",
              ],
            ]}
            allergenTitle="Allergen Information"
            allergenInfo="Contains: Wheat, Eggs, Dairy. May contain traces of nuts and soy."
            storageTitle="Storage Instructions"
            storageItems={[
              "Keep refrigerated for up to 3 days",
              "Freeze for longer storage",
              "Reheat before serving",
            ]}
            name="product"
          />
        </div>

        <div className=" sm:p-10 h-full sm:w-1/3">
          <div className=" space-y-3">
            <div className="bg-tertiary  h-full p-6 space-y-4 ">
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
                <Button
                  className={"w-full text-white bg-primary"}
                  name={"Enquiry Now"}
                />
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
