import { City } from "./city.model";

const createCityIntoDB = async (payload: TCity) => {
  const result = await City.create(payload);
  return result;
};
const getAllCitiesFromDB = async () => {
  const result = await City.find();
  return result;
};

export const cityServices = { createCityIntoDB, getAllCitiesFromDB };
