import React from "react";
import DetailPageHeader from "../../../common/layout/header/DetailPageHeader";
import ProductDetailDescription from "../../../common/components/cards/product/Details/ProductDetailDescription";
import time from "../../../../public/Images/time.png";
import badge from "../../../../public/Images/badge.png";
import leaf from "../../../../public/Images/leaf.png";
import deepavali from "../../../../public/Images/deepavali.png";
import ProductAboutDetails from "../../../common/components/cards/product/Details/ProductAboutDetails";
import ProductViewCard from "../../../common/components/cards/product/ProductViewCard";
import Footer from "../../../common/layout/footer/Footer";
import productImabe from "../../../../public/Images/product.png";
import product1 from "../../../../public/Images/product1.png";
import product8 from "../../../../public/Images/product8.png";
import product10 from "../../../../public/Images/product10.png";
import product2 from "../../../../public/Images/product2.png";
import product3 from "../../../../public/Images/product3.png";
import product4 from "../../../../public/Images/product4.png";
import product5 from "../../../../public/Images/product5.png";

function FestivelDetailLayout() {
  const products = [
    {
      image: productImabe,
      name: "Artisan Croissants",
        price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product8,
      name: "Artisan Croissants",
        price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product5,
      name: "Artisan Croissants",
        price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },

    // {
    //   image: product1,
    //   name: "Artisan Croissants",
    //   price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
    //   catogery: "Pastries",
    //   ingredients: "Flour, Butter, Eggs...",
    // },
    {
      image: product2,
      name: "Artisan Croissants",
        price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    // {
    //   image: product10,
    //   name: "Artisan Croissants",
    // //   price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
    // //   catogery: "Pastries",
    // //   ingredients: "Flour, Butter, Eggs...",
    // },

    // {
    //   image: product3,
    //   name: "Artisan Croissants",
    //   price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
    // //   catogery: "Pastries",
    // //   ingredients: "Flour, Butter, Eggs...",
    // },
    // {
    //   image: product4,
    //   name: "Artisan Croissants",
    //   price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
    //   catogery: "Pastries",
    //   ingredients: "Flour, Butter, Eggs...",
    // },
  ];
  return (
    <>
      <div className="h-full sm:h-[95vh] w-[100vw] ">
        <DetailPageHeader />
        <div className="flex flex-col sm:flex-row h-full justify-around ">
          <div className="w-full  h-full flex justify-center py-10 sm:pl-5 ">
            <div className="flex flex-col overflow-auto  space-y-5">
              <div className="">
                <div className="sm:w-[616px] flex items-center justify-center sm:flex-none  w-full  h-[462px] ">
                  <img
                    src={deepavali}
                    className=" w-[360px] sm:w-full rounded-xl h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex  justify-center items-center overflow-x-auto  sm:min-w-[620px] ">
                <div className="flex h-full   gap-x-3  overflow-x-auto w-[620px] ">
                <div className="div bg-amber-400 h-[145px] w-[145px] flex-shrink-0 "></div>
                <div className="div bg-amber-400 h-[145px] w-[145px] flex-shrink-0 "></div>
                <div className="div bg-amber-400 h-[145px] w-[145px] flex-shrink-0 "></div>
                {/* <div className="div bg-amber-400 h-[145px] w-[145px] flex-shrink-0 "></div>
                <div className="div bg-amber-400 h-[145px] w-[145px] flex-shrink-0 "></div>
                <div className="div bg-amber-400 h-[145px] w-[145px]  flex-shrink-0"></div>
                <div className="div bg-amber-400 h-[145px] w-[145px] flex-shrink-0 "></div> */}
              </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-5 py-8  ">
            <ProductDetailDescription
              name="festivel"
              title="Festival Cookies"
              description="Handcrafted traditional cookies infused with aromatic spices and
               premium nuts, perfect for celebrating festivals and special
                occasions with authentic flavors."
              rating={4.9}
              reviews={127}
              features={[
                {
                  icon: time,
                  description: "Topped with house-made cream cheese frosting",
                },
                {
                  icon: leaf,
                  description: "Made with premium Ceylon cinnamon",
                },
                {
                  icon: badge,
                  description: "Baked fresh daily • Best served warm",
                },
              ]}
              sizes={[
                { label: "Small", value: "2 pcs" },
                { label: "Large", value: "6 pcs" },
              ]}
              buttonLabel="Enquire Now"
              onButtonClick={() => console.log("Added to cart!")}
              catogeries={[
                {
                  icon: leaf,
                  description: "Vegetarian",
                  color: "bg-statusgreen",
                },
                {
                  icon: leaf,
                  description: "Handmade",
                  color: "bg-statusblue",
                },
                {
                  icon: leaf,
                  description: "No Preservatives",
                  color: "bg-statuspurp",
                },
              ]}
              className="bg-tertiaryDark space-y-3 p-5"
            />
          </div>
        </div>
        <div className=" flex justify-center h-full w-full sm:h-[60vh] items-center">
          <div className="w-[800px] shadow-md rounded-md p-5  space-y-6">
            <div className="w-full space-y-4  border-b border-neutral-gray1 ">
              <div className=" flex w-[200px] border-b border-primary px-3 bg-tertiary py-4 gap-x-5 ">
                <h1>icon</h1>
                <h1>Description</h1>
              </div>
            </div>
            <ProductAboutDetails
              aboutTitle="About Festival Cookies"
              aboutParagraphs={[
                `Our Festival Cookies are a celebration of traditional Indian flavors and artisanal craftsmanship. Each cookie 
                is carefully handcrafted using time-honored recipes that have been perfected over generations.`,

                `Made with premium ingredients including pure ghee,
                 organic jaggery, and aromatic spices like cardamom and saffron, 
                 these cookies offer an authentic taste experience that transports you to
                  the heart of Indian festivals and celebrations.`,
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
            />
            <div className="space-y-3">
              <h1 className="text-base font-semibold">Serving Suggestions</h1>
              <ul className="px-5 list-disc list-inside space-y-3 ">
                <li className="text-base">
                  Perfect with chai or coffee during afternoon tea
                </li>
                <li>Perfect with chai or coffee during afternoon tea</li>
                <li>Perfect with chai or coffee during afternoon tea</li>
                <li>Perfect with chai or coffee during afternoon tea</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[100vw] mt-20">
          <div className="flex flex-col sm:justify-center space-y-3 p-4 sm:items-center">
            <h1 className="text-2xl font-bold">You Might Also Like</h1>
            {/* <p>Discover more delicious treats from our bakery</p> */}
          </div>
          <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-4 py-5 gap-x-4 px-3 sm:px-12 place-items-center ">
            {products.map((item, i) => (
              <ProductViewCard
                image={item?.image}
                name={item?.name}
                description={item?.description}
                catogery={item?.catogery}
                ingredients={item?.ingredients}
                price={item?.price}
                festivel={true}
                btnname="View Details"
                className={''}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default FestivelDetailLayout;
