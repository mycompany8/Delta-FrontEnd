import React from "react";
import Header from "../../../../common/layout/header/Header";
import ErrorLayOut from "../../../../common/layout/error/ErrorLayOut";

import bgimage from "../../../../../public/Images/product4.png";
import cookie from "../../../../../public/Images/cookie.png";
import saved from "../../../../../public/Images/saved.png";
import like from "../../../../../public/Images/like.png";
import gmail from "../../../../../public/Images/gmailorange.png";
import Footer from "../../../../common/layout/footer/Footer";
import sadcookie from "../../../../../public/Images/sadcookie.jpg";

import productImabe from "../../../../../public/Images/product.png";
import product1 from "../../../../../public/Images/product1.png";
import product8 from "../../../../../public/Images/product8.png";
import product10 from "../../../../../public/Images/product10.png";
import product2 from "../../../../../public/Images/product2.png";
import product3 from "../../../../../public/Images/product3.png";
import product4 from "../../../../../public/Images/product4.png";
import product5 from "../../../../../public/Images/product5.png";
import ProductViewCard from "../../../../common/components/cards/product/ProductViewCard";

function PageNotFound() {
  const products = [
    {
      image: productImabe,
      name: "Artisan Croissants",
        price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product8,
      name: "Artisan Croissants",
        price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product5,
      name: "Artisan Croissants",
        price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    // {
    //   image: product2,
    //   name: "Artisan Croissants",
        // price: "400",
    //   description:
    //     "Buttery, flaky perfection baked fresh daily with premium French butter",
    //   //   catogery: "Pastries",
    //   //   ingredients: "Flour, Butter, Eggs...",
    // },
  ];
  const buttons = [
    { name: "Back to Home", onClick: () => alert("Go to home") },
    { name: "View Menu", onClick: () => alert("View menu") },
  ];

  const icons = [
    { src: like, label: "Like" },
    { src: cookie, label: "Cookie" },
    { src: saved, label: "Saved" },
  ];

  const support = {
    icon: gmail,
    title: "Need Help Finding Something?",
    subtitle:
      "Our team is here to help you find exactly what you're looking for.",
    contactText: "Contact Support",
    onContact: () => alert("Support clicked!"),
  };
  return (
    <>
      <Header />

      <ErrorLayOut
        img={sadcookie}
        bgImage={bgimage}
        code="404"
        title="Page Not Found"
        description="It looks like this page crumbled away! Don’t worry, our fresh baked goods are still waiting for you at home."
        buttons={buttons}
        icons={icons}
        support={support}
      />

      <div className="w-[100vw] mt-20">
        <div className="flex flex-col sm:justify-center w-full space-y-3 p-4 sm:items-center">
          <h1 className="text-2xl font-bold">While You're Here...</h1>
          <p className="text-center">Check out some of our most popular treats that customers can't stop <br /> talking about</p>
        </div>
        <div className="grid grid-cols-2   gap-y-3 sm:grid-cols-3 py-5 gap-x-4 px-3 sm:px-12 place-items-center ">
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
              className={""}
            />
          ))}
        </div>
      </div>
      {/* <div className="grid grid-cols-2 w-[100vw] sm:grid-cols-3 py-5 gap-x-4 px-2 gap-y-3 sm:px-12 place-items-center ">
            {products.map((item, i) => (
              <ProductViewCard
                image={item?.image}
                name={item?.name}
                description={item?.description}
                catogery={item?.catogery}
                ingredients={item?.ingredients}
                price={item?.price}
                btnname={"View Detail"}
              />
            ))}
          </div> */}
      <Footer />
    </>
  );
}

export default PageNotFound;
