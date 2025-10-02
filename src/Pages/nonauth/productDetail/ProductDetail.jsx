import React from "react";
import DetailPageHeader from "../../../common/layout/header/DetailPageHeader";
import ProductDetailsView from "./common/components/productDetailView/ProductDetailsView";
import ProductDescription from "./common/components/productDescription/ProductDescription";
import CustomerReview from "./common/cards/review/CustomerReview";
import Footer from "../../../common/layout/footer/Footer";
// import CustomerReview from "./common/components/review/CustomerReview";

function ProductDetail() {
  return (
    <>
      <div className="h-screen ">
        <DetailPageHeader />
        <ProductDetailsView />
      </div>
      <div className="">
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
        <Footer/>
      </div>
    </>
  );
}

export default ProductDetail;
