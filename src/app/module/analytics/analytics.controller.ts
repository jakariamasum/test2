import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { analyticsServices } from "./analytics.service";

const createAnalytics = catchAsync(async (req, res) => {
  const result = await analyticsServices.createAnalyticsIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Analytics created successfully!",
    data: result,
  });
});
const getAnalytics = catchAsync(async (req, res) => {
  const result = await analyticsServices.getAnalyticsFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Analytics retrived successfully!",
    data: result,
  });
});
const updateAnalytics = catchAsync(async (req, res) => {
  const { analytics_id } = req.params;
  const result = await analyticsServices.updateAnalyticsIntoDB(
    analytics_id,
    req.body
  );
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Analytics updated successfully!",
    data: result,
  });
});
const deleteAnalytics = catchAsync(async (req, res) => {
  const { analytics_id } = req.params;
  const result = await analyticsServices.deleteAnalyticsFromDB(analytics_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Analytics delete successfully!",
    data: result,
  });
});

export const analyticsControllers = {
  createAnalytics,
  getAnalytics,
  updateAnalytics,
  deleteAnalytics,
};
