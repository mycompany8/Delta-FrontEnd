import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { addVarient } from "../../../../service/nonauth/product/varient/varientService";

//add varient
export const useAddVarient = () => {
  return useMutation({
    mutationKey: ["varient"],
    mutationFn: addVarient,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      const errore =
        err?.response?.message || err?.message | "Add varient failed";
      toast.error(errore);
    },
  });
};
