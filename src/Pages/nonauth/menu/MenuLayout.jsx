import React, { useCallback, useEffect, useState } from "react";
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
import Footer from "../../../common/layout/footer/Footer";
import {
  useGetProducts,
  useGetProductsByCatogery,
} from "../../../hooks/nonauth/product/useProduct";
import useForm from "../../../hooks/common/form/useForm";
import useDebonce from "../../../hooks/common/debounse/debonce";
import { useNavigate } from "react-router-dom";

function MenuLayout() {
  const [search, setSearch] = useState("");
  const [catogery, setCatogery] = useState("");
  const navigate=useNavigate()

  const debouncedSearch = useDebonce(setSearch);
  //formik
  const initialValues = {
    searchTerm: "",
  };
  const formik = useForm(initialValues, () => {});
  //productget
  const { data: products, isLoading: isProducts } = useGetProducts({
    categoryId: 0,
    searchTerm: search,
  });
  const { data: productsByCat, isLoading: isProductsByCat } =
    useGetProductsByCatogery({
      categoryId: catogery,
    });

  //search
  useEffect(() => {
    debouncedSearch(formik.values.searchTerm);
  }, [formik.values.searchTerm]);
  console.log(products, "products");
  console.log(productsByCat, "productsByCat");

 const productse = catogery
  ? productsByCat?.length>0?products: []
  : products ?? [];
  // if () {
  //   productse =  || [];
  // } else if (products?.length>0) {
  //   productse = products || [];
  // }

  // const productse=?productsByCat :products

  return (
    <div>
      <Header />
      <MenuHeader
        formik={formik}
        setSearch={setSearch}
        setCatogery={setCatogery}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 w-full sm:w-[100vw]  place-items-center bg-background-primary gap-y-5 p-4 sm:p-5 ">
        {productse?.length > 0 ? (
          productse?.map((item,i) => (
            <ProductViewCard
            key={i+1}
              image={item?.productImages?.[0]?.imageUrl}
              name={item?.name}
              description={item?.description}
              catogery={item?.catogery}
              ingredients={item?.ingredients}
              price={item?.price}
              className={
                "w-[166.5px] h-full  sm:min-h-[633.328125px]  min-h-[380px] sm:w-[405.328125px] "
              }
              btnname={"View Details"}
              menu={true}
              onclick={()=>navigate(`/product-detail/${item?.id}`)}
              imgStyle={'sm:min-h-[403.328125px] '}
            />
          ))
        ) : (
          <h1>data not found</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MenuLayout;
