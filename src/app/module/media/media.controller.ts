import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { mediaServices } from "./media.service";

const createMedia = catchAsync(async (req, res) => {
  const result = await mediaServices.createmediaIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Media created successfully!",
    data: result,
  });
});
const getMedia = catchAsync(async (req, res) => {
  const result = await mediaServices.getMediaFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Media retrived successfully!",
    data: result,
  });
});
const updateMedia = catchAsync(async (req, res) => {
  const { media_id } = req.params;
  const result = await mediaServices.updateMediaIntoDB(media_id, req.body);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Media updated successfully!",
    data: result,
  });
});
const deleteMedia = catchAsync(async (req, res) => {
  const { media_id } = req.params;
  const result = await mediaServices.deleteMediaFromDB(media_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Media delete successfully!",
    data: result,
  });
});

export const mediaControllers = {
  createMedia,
  getMedia,
  updateMedia,
  deleteMedia,
};
