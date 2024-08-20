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
const getSingleVideo = async (id: string) => {
  const video = await Video.findOne({ _id: id });
  return video;
};

const updateVideoIntoDB = async (id: string, payload: Partial<TVideo>) => {
  const result = await Video.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteVideoFromDB = async (id: string) => {
  const result = await Video.findByIdAndDelete({ _id: id });
  return result;
};

export const videoServices = {
  createVideoIntoDB,
  getAllVideoFromDB,
  getSingleVideo,
  updateVideoIntoDB,
  deleteVideoFromDB,
};
