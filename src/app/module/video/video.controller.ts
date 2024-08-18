import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { videoServices } from "./video.service";
import AppError from "../../errors/AppError";

const createVideo = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await videoServices.createVideoIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Video created successfully!",
    data: result,
  });
});
const getAllVideo = catchAsync(async (req, res) => {
  const result = await videoServices.getAllVideoFromDB();
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "videos retrived successfully!",
    data: result,
  });
});

export const videoController = { createVideo, getAllVideo };
