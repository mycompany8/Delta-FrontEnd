import React from "react";
import DetailPageHeader from "../../../common/layout/header/DetailPageHeader";
import ProductDetailsView from "./common/components/productDetailView/ProductDetailsView";
import ProductDescription from "./common/components/productDescription/ProductDescription";
import CustomerReview from "./common/cards/review/CustomerReview";
import Footer from "../../../common/layout/footer/Footer";
import ProductViewCard from "../../../common/components/cards/product/ProductViewCard";
// import CustomerReview from "./common/components/review/CustomerReview";
import productImabe from "../../../../public/Images/product.png";
import product1 from "../../../../public/Images/product1.png";
import product8 from "../../../../public/Images/product8.png";
import product10 from "../../../../public/Images/product10.png";
import product2 from "../../../../public/Images/product2.png";
import product3 from "../../../../public/Images/product3.png";
import product4 from "../../../../public/Images/product4.png";
import product5 from "../../../../public/Images/product5.png";
import { useParams } from "react-router-dom";
import {
  useGetProducts,
  useGetProductsById,
} from "../../../hooks/nonauth/product/useProduct";
function ProductDetail() {
  const { id } = useParams();
  const products = [
    {
      image: productImabe,
      name: "Artisan Croissants",
      //   price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product8,
      name: "Artisan Croissants",
      //   price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product5,
      name: "Artisan Croissants",
      //   price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
    {
      image: product2,
      name: "Artisan Croissants",
      //   price: "400",
      description:
        "Buttery, flaky perfection baked fresh daily with premium French butter",
      //   catogery: "Pastries",
      //   ingredients: "Flour, Butter, Eggs...",
    },
  ];

  //productget
  const { data: productsById, isLoading: isProductsById } = useGetProductsById({
    productId: id,
  });
  console.log(productsById,"eer");

  const product = productsById?.[0];

  return (
    <>
      <div className="h-full sm:h-screen ">
        <DetailPageHeader />
        <ProductDetailsView productsById={productsById} />
      </div>
      <div className="h-full">
        <ProductDescription />
        <CustomerReview
          title="Customer Reviews"
          subtitle="4.9 out of 5 (127 reviews)"
          reviews={[
            {
              name: "Sarah Johnson",
              date: "2 days ago",
              text: "These cinnamon rolls are absolutely divine! The perfect balance of cinnamon and sweetness. My family asks for them every weekend now.",
            },
            {
              name: "Michael Lee",
              date: "1 week ago",
              text: "Soft, fluffy, and so fresh. Best cinnamon rolls I’ve ever had!",
            },
            {
              name: "Emma Brown",
              date: "3 weeks ago",
              text: "Delicious and perfectly baked. Will definitely order again!",
            },
          ]}
        />
        <div className="w-[100vw] h-full">
          <div className="flex flex-col justify-center space-y-3 p-4 items-center">
            <h1 className="text-2xl font-semibold">You Might Also Like</h1>
            <p>Discover more delicious treats from our bakery</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 py-5 gap-x-4 px-2 gap-y-3 sm:px-12 place-items-center ">
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
