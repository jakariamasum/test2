import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { adsServices } from "./ads.service";

const createAds = catchAsync(async (req, res) => {
  const result = await adsServices.createAdsIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Ads created successfully!",
    data: result,
  });
});
const getAds = catchAsync(async (req, res) => {
  const result = await adsServices.getAdsFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Ads retrived successfully!",
    data: result,
  });
});

const updateAds = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adsServices.updateAdsIntoDB(id, req.body);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Ads updated successfully!",
    data: result,
  });
});

export const adsControllers = {
  createAds,
  getAds,
  updateAds,
};
