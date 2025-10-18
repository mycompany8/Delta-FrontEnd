import React, { useEffect, useState } from "react";
import Header from "../../../common/layout/header/Header";
import MenuHeader from "./common/components/MenuHeader";
import ProductViewCard from "../../../common/components/cards/product/ProductViewCard";
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
  const { data: products } = useGetProducts({
    categoryId: 0,
    searchTerm: search,
  });
  const { data: productsByCat } = useGetProductsByCatogery({
    categoryId: catogery,
  });

  //search
  useEffect(() => {
    debouncedSearch(formik.values.searchTerm);
  }, [formik.values.searchTerm, debouncedSearch]);
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
    <div className="min-h-screen bg-background-primary">
      <Header className={'bg-neutral-secondary'} />
      <MenuHeader
        formik={formik}
        setSearch={setSearch}
        setCatogery={setCatogery}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-[100vw] bg-background-primary py-6 sm:py-8">
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
                "w-full max-w-sm mx-auto sm:max-w-none"
              }
              btnname={"View Details"}
              menu={true}
              onclick={()=>navigate(`/product-detail/${item?.id}`)}
              imgStyle={'w-full h-48 sm:h-56 md:h-64 lg:h-72'}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 sm:py-16">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">No products found</h1>
              <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MenuLayout;
