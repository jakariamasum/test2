import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { newsServices } from "./news.service";
import AppError from "../../errors/AppError";

const createNews = catchAsync(async (req, res) => {
  const result = await newsServices.createNewsIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News created successfully!",
    data: result,
  });
});
const getNews = catchAsync(async (req, res) => {
  const result = await newsServices.getNewsFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News retrived successfully!",
    data: result,
  });
});
const getNewsByLanguage = catchAsync(async (req, res) => {
  const { lang } = req.params;
  const result = await newsServices.getNewsByLanguageFromDB(lang);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News retrived successfully!",
    data: result,
  });
});
const getNewsByCategory = catchAsync(async (req, res) => {
  const { category_id } = req.params;
  const { lang } = req.query;
  console.log(lang);
  const result = await newsServices.getNewsByCategoryFromDB(
    category_id,
    lang as string
  );
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News retrived successfully!",
    data: result,
  });
});
const getNewsByUser = catchAsync(async (req, res) => {
  const { user_id } = req.params;
  const result = await newsServices.getNewsByUserFromDB(user_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News retrived successfully!",
    data: result,
  });
});
const updateNews = catchAsync(async (req, res) => {
  const { news_id } = req.params;
  const result = await newsServices.updateNewsIntoDB(news_id, req.body);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News updated successfully!",
    data: result,
  });
});
const deleteNews = catchAsync(async (req, res) => {
  const { news_id } = req.params;
  const result = await newsServices.deleteNewsFromDB(news_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News delete successfully!",
    data: result,
  });
});

export const newsControllers = {
  createNews,
  getNews,
  getNewsByLanguage,
  getNewsByCategory,
  getNewsByUser,
  updateNews,
  deleteNews,
};
