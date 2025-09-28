import React from "react";
import Header from "../../../common/layout/header/Header";
import MenuHeader from "./common/components/MenuHeader";
import ProductViewCard from "../../../common/components/cards/product/ProductViewCard";

import productImabe from "../../../../public/Images/product.png";
import product1 from "../../../../public/Images/product1.png";
import product8 from "../../../../public/Images/product8.png";
import product10 from "../../../../public/Images/product10.png";
import product2 from "../../../../public/Images/product2.png";
import product3 from "../../../../public/Images/product3.png";
import product4 from "../../../../public/Images/product4.png";
import product5 from "../../../../public/Images/product5.png";
import product6 from "../../../../public/Images/product6.png";
import Footer from "../../../common/layout/footer/Footer";
function MenuLayout() {
  const products = [
    {
      image: product8,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product10,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product1,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product2,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: productImabe,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product3,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product4,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product5,
      name: "Artisan Croissants",
      price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      catogery: "Pastries",
      ingredients: "Flour, Butter, Eggs...",
    },
  ];
  return (
    <div>
      <Header />

      <MenuHeader />
      <div className="grid grid-cols-2 sm:grid-cols-3 w-[100vw] place-items-center bg-background-primary gap-y-5 p-4 sm:p-5 ">
        {products.map((item, i) => (
          <ProductViewCard
            image={item?.image}
            name={item?.name}
            description={item?.description}
            catogery={item?.catogery}
            ingredients={item?.ingredients}
            price={item?.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MenuLayout;
