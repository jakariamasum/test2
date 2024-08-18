import { TVideo } from "./video.interface";
import { Video } from "./video.model";

const createVideoIntoDB = async (payload: TVideo) => {
  const result = await Video.create(payload);
  return result;
};
const getAllVideoFromDB = async () => {
  const videos = await Video.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "category.category",
        foreignField: "_id",
        as: "category.category",
      },
    },
    {
      $unwind: {
        path: "$category.category",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "category.subCategory",
        foreignField: "_id",
        as: "category.subCategory",
      },
    },
    {
      $unwind: {
        path: "$category.subCategory",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);

  return videos;
};

export const videoServices = { createVideoIntoDB, getAllVideoFromDB };
