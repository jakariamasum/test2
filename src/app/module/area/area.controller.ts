import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { areaServices } from "./area.service";

const createArea = catchAsync(async (req, res) => {
  const result = await areaServices.createAreaIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Area created successfully!",
    data: result,
  });
});
const getAllArea = catchAsync(async (req, res) => {
  const result = await areaServices.getAllAreaFromDB();
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Areas retrived successfully!",
    data: result,
  });
});

export const areaControllers = { createArea, getAllArea };