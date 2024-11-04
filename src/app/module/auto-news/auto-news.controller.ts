import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AutoNewsServices } from "./auto-news.service";

const createAutoNews = catchAsync(async (req, res) => {
  const result = await AutoNewsServices.createAutoNewsIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Auto News created successfully!",
    data: result,
  });
});
const getAllAutoNews = catchAsync(async (req, res) => {
  const result = await AutoNewsServices.getAllAutoNewsFromDB();
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Auto News retrived successfully!",
    data: result,
  });
});
const getLatestAutoNews = catchAsync(async (req, res) => {
  const result = await AutoNewsServices.getLatestAutoNews();
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  res.send(result);
});
const updateaAutoNews = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AutoNewsServices.updateAutoNewsFromDB(id, req.body);
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Auto News updated successfully!",
    data: result,
  });
});
const deleteAutoNews = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleted id", id);
  const result = await AutoNewsServices.deleteAutoNewsFromDB(id);
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Auto News deleted successfully!",
    data: result,
  });
});

export const AutoNewsControllers = {
  createAutoNews,
  getAllAutoNews,
  updateaAutoNews,
  deleteAutoNews,
  getLatestAutoNews,
};
