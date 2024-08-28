import { TCity } from "../city/city.interface";
import { Area } from "./area.model";

const createAreaIntoDB = async (payload: TCity) => {
  const result = await Area.create(payload);
  return result;
};
const getAllAreaFromDB = async () => {
  const result = await Area.find().populate("city");
  return result;
};

export const areaServices = { createAreaIntoDB, getAllAreaFromDB };
