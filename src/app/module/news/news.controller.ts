import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { newsServices } from "./news.service";
import AppError from "../../errors/AppError";
import { categoryServices } from "../category/category.service";

const createNews = catchAsync(async (req, res) => {
  const result = await newsServices.createNewsIntoDB(req.body);
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

const getNewsByCategoryIds = catchAsync(async (req, res) => {
  const { categories } = req.body;
  const { lang } = req.query;
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    throw new AppError(400, "Invalid category IDs provided");
  }

  const result = [];

  for (const category of categories) {
    // Extract the category ID
    const categoryId = category.catId;

    const categoryData =
      await categoryServices.getSingleCategoryFromDB(categoryId);
    if (categoryData) {
      const posts = await newsServices.getNewsByCategoryFromDB(categoryId);
      result.push({ category: categoryData, posts });
    }
  }

  if (result.length === 0) {
    throw new AppError(404, "No data found");
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "News retrieved successfully!",
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
  console.log("hit id", news_id);
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
  getNewsByCategoryIds,
};
