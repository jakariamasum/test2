import { TMedia } from "./media.interface";
import { Media } from "./media.model";

const createmediaIntoDB = async (payload: TMedia) => {
  const result = await Media.create(payload);
  return result;
};

const getMediaFromDB = async () => {
  const result = await Media.find();
  return result;
};
const updateMediaIntoDB = async (id: string, payload: Partial<TMedia>) => {
  const result = await Media.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteMediaFromDB = async (id: string) => {
  const result = await Media.findByIdAndDelete({ _id: id });
  return result;
};

export const mediaServices = {
  createmediaIntoDB,
  getMediaFromDB,
  updateMediaIntoDB,
  deleteMediaFromDB,
};
