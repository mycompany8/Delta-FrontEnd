import React from "react";
import Carousel from "../../../../../../common/components/carosel/Carosel";
import Button from "../../../../../../common/components/button/Button";
import ProductDetailDescription from "../../../../../../common/components/cards/product/Details/ProductDetailDescription";
import time from "../../../../../../../public/Images/time.png";
import badge from "../../../../../../../public/Images/badge.png";
import leaf from "../../../../../../../public/Images/leaf.png";
function ProductDetailsView() {
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300",
  ];
  return (
    <div>
      {" "}
      <div className="flex flex-col sm:flex-row gap-x-1 w-[100vw]  p-5">
        <div className=" w-full flex-1 sm:p-12 justify-end items-center">
          <Carousel items={images} autoSlide={true} autoSlideInterval={2500} />
        </div>
        <div className=" py-12 px-5   gap-y-9 leading-relaxed  flex-1 w-full">
          <ProductDetailDescription
            title="Cinnamon Rolls"
            description="Warm, gooey, and absolutely irresistible
             cinnamon rolls made with our signature dough, rolled with premium
             Ceylon cinnamon and brown sugar, then topped with our
              house-made cream cheese frosting."
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
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsView;
