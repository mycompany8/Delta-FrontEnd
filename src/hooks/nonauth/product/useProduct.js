import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  addProduct,
  getProduct,
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
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(payload),
  });
};
