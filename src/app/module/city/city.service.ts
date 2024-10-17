import { TCity } from "./city.interface";
import { City } from "./city.model";

const createCityIntoDB = async (payload: TCity) => {
  const result = await City.create(payload);
  return result;
};
const getAllCitiesFromDB = async () => {
  const result = await City.find();
  return result;
};
const updateCityInDB = async (id: string, payload: Partial<TCity>) => {
  const result = await City.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const cityServices = {
  createCityIntoDB,
  getAllCitiesFromDB,
  updateCityInDB,
};
