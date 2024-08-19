import { TAds } from "./ads.interface";
import { Ads } from "./ads.model";

const createAdsIntoDB = async (payload: TAds) => {
  const result = await Ads.create(payload);
  return result;
};

const getAdsFromDB = async () => {
  const result = await Ads.find();
  return result;
};
const updateAdsIntoDB = async (id: string, payload: Partial<TAds>) => {
  const result = await Ads.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const adsServices = { createAdsIntoDB, getAdsFromDB, updateAdsIntoDB };
