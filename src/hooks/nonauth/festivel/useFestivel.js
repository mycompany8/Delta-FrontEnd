import { useMutation, useQuery } from "@tanstack/react-query";

import { toast } from "sonner";
import {
  addFestivel,
  getFestivel,
} from "../../../service/nonauth/festivel/festivelService";

//add festivel
export const useAddFestivel = () => {
  return useMutation({
    mutationKey: ["festivel"],
    mutationFn: addFestivel,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      const errore =
        err?.response?.message || err?.message | "Add Festivel failed";
      toast.error(errore);
    },
  });
};

//get festivel
export const useGetfestivel = () => {
  return useQuery({
    queryKey: ["festivel"],
    queryFn: getFestivel,
  });
};
