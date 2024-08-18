import { TVideo } from "./video.interface";
import { Video } from "./video.model";

const createVideoIntoDB = async (payload: TVideo) => {
  const result = await Video.create(payload);
  return result;
};
const getAllVideoFromDB = async () => {
  const result = await Video.find();
  return result;
};

export const videoServices = { createVideoIntoDB, getAllVideoFromDB };
