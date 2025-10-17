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
  const { searchTerm, categoryId } = payload;
  console.log(searchTerm, categoryId);

  const res = await api.post("Products", {
    ...payload,
  });
  console.log(res.data);
  return res?.data?.data;
};

export const getProductById = async (payload) => {
  const { productId } = payload;
  const res = await api.get(`Product/${productId}`);
  console.log(res.data);
  return res?.data?.data;
};

export const getProductByCatogery = async (payload) => {
  const { categoryId } = payload;
  console.log(categoryId);
  const res = await api.get(`GetProductCat/${categoryId}`);
  console.log(res?.data);
  return res?.data?.data;
};
