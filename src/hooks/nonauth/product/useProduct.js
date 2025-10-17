import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  addProduct,
  getProduct,
  getProductByCatogery,
  getProductById,
} from "../../../service/nonauth/product/productService";

//add product
export const useAddProduct = () => {
  return useMutation({
    mutationKey: ["product"],
    mutationFn: addProduct,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      const errore =
        err?.response?.message || err?.message | "Add product failed";
      toast.error(errore);
    },
  });
};

//get product
export const useGetProducts = (payload) => {
    console.log(payload,"rfeff");
    
  return useQuery({
    queryKey: ["product",payload],
    queryFn: () => getProduct(payload),
  });
};

//get product by id
export const useGetProductsById = (payload) => {
    console.log(payload,"rfeff");
    
  return useQuery({
    queryKey: ["product",payload],
    queryFn: () => getProductById(payload),
  });
};

//get productByCatogery
export const useGetProductsByCatogery = (payload) => {
    console.log(payload,"rfeff");
    
  return useQuery({
    queryKey: ["productByCat",payload],
    queryFn: () => getProductByCatogery(payload),
  });
};
