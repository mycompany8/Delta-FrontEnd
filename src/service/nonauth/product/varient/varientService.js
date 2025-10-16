import api from "../../../common/api";

export const addVarient = async (payload) => {
  const { variantName, price, discountPrice, stockQuantity, productId } =
    payload;
  console.log(variantName, price, discountPrice, stockQuantity, productId);

  const res = await api.post(`AddVariant/${productId}`, {
    ...payload,
  });

  return res?.data;
};
