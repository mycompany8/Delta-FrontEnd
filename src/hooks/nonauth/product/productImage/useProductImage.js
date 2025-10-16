import { addProductImage } from "../../../../service/nonauth/product/image/productImageService";

//add product image
export const useAddProductImage = () => {
  return useMutation({
    mutationKey: ["productImage"],
    mutationFn: addProductImage,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      const errore =
        err?.response?.message || err?.message | "Add product Image failed";
      toast.error(errore);
    },
  });
};
