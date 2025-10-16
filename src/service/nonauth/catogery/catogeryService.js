import api from "../../common/api";

//add catogery
export const addCatoggeryService = async (payload) => {
  const { name, description } = payload;
  console.log(name, description);
  const res = await api.post("CategoryAdd", {
    ...payload,
  });

  return res?.data;
};


//get catogery
export const getCatogery = async () => {
  const res = await api.get("GetCategories");
  console.log(res.data);
  return res?.data?.data;
};
