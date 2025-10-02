import React from "react";
import DetailPageHeader from "../../../common/layout/header/DetailPageHeader";
import ProductDetailsView from "./common/components/productDetailView/ProductDetailsView";
import ProductDescription from "./common/components/productDescription/ProductDescription";

function ProductDetail() {
  return (
    <>
      <div className="h-screen ">
        <DetailPageHeader />
        <ProductDetailsView />
      </div>
      <div className="">
        <ProductDescription />
      </div>
    </>
  );
}

export default ProductDetail;
