import { TArea } from "./area.interface";
import { Area } from "./area.model";

const createAreaIntoDB = async (payload: TArea) => {
  const result = await Area.create(payload);
  return result;
};
const getAllAreaFromDB = async () => {
  const result = await Area.find().populate("city");
  return result;
};
const updateaAreaIntoDB = async (id: string, payload: Partial<TArea>) => {
  const result = await Area.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const updateaAreaStatusIntoDB = async (id: string, payload: Partial<TArea>) => {
  const result = await Area.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const areaServices = {
  createAreaIntoDB,
  getAllAreaFromDB,
  updateaAreaIntoDB,
  updateaAreaStatusIntoDB,
};
