import api from "../../../common/api";

export const addProductImage = async (payload) => {
  const { url, isPrimary, productId } = payload;
  const formData = new FormData();
  formData.append("url", url);
  formData.append("isPrimary", isPrimary);
  const res = await api.post(`AddProductImage/${productId}`, formData);
  console.log(res.data);

  return res?.data;
};
