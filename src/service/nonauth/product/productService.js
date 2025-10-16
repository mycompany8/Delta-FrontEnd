import api from "../../common/api";

export const addProduct = async (payload) => {
  const {
    name,
    categoryId,
    description,
    keyFeatures,
    ingredients,
    allergences,
    storageInstructions,
    isFestivalSpecial,
    productVariants = [],
    productImages = [],
  } = payload;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("categoryId", categoryId);
  formData.append("description", description);
  formData.append("keyFeatures", keyFeatures);
  formData.append("ingredients", ingredients);
  formData.append("allergences", allergences);
  formData.append("storageInstructions", storageInstructions);
  formData.append("isFestivalSpecial", isFestivalSpecial);
  formData.append("productImages", productImages);
  const res = await api.post("AddProduct", formData);
  console.log(res.data);

  return res?.data?.data;
};
export const getProduct = async (payload) => {
  const { search_in, categoryId } = payload;
  const res = await api.post("Products");
  console.log(res.data);
  return res?.data?.data;
};
