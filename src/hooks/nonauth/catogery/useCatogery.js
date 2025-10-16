import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addCatoggeryService,
  getCatogery,
} from "../../../service/nonauth/catogery/catogeryService";
import { toast } from "sonner";

//add catogery
export const useAddCatogery = () => {
  return useMutation({
    mutationKey: ["catogery"],
    mutationFn: addCatoggeryService,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      const errore =
        err?.response?.message || err?.message | "Add Catogery failed";
      toast.error(errore);
    },
  });
};

//get catogery
export const useGetCatogery = () => {
  return useQuery({
    queryKey: ["catogery"],
    queryFn: getCatogery,
  });
};
