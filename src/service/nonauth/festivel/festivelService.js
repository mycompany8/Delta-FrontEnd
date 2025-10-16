import api from "../../common/api";




//add festivel
export const addFestivel = async (payload) => {
  const { festivalName, startDate, endDate } = payload;
  const res = await api.post("AddFestival", {
    ...payload,
  });
  console.log(res.data);
  return res?.data;
};
//get festivel
export const getFestivel = async () => {
  const res = await api.get("Festival");
  console.log(res.data);
  return res?.data?.data;
};
