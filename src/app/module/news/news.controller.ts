import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { newsServices } from "./news.service";
import AppError from "../../errors/AppError";
import { categoryServices } from "../category/category.service";
import { JwtPayload } from "jsonwebtoken";
import { userServices } from "../user/user.service";

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
  const { lang } = req.query;
  console.log(lang);
  const result = await newsServices.getNewsFromDB(lang as string);

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
const getSingleNewsById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await newsServices.getSingleNewsFromDB(id);
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
  console.log("hit hre");
  console.log(req.decoded);
  const { userId } = req.decoded as JwtPayload;
  console.log(userId);
  if (userId) {
    const user = await userServices.getSingleUserFromDB(userId);
    console.log(user);
    if (!user) {
      throw new AppError(404, "No user found");
    }
    const id = user._id;
    const result = await newsServices.getNewsByUserFromDB(id);
    console.log(result);
    if (!result) {
      throw new AppError(404, "No data found");
    }
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "News retrived successfully!",
      data: result,
    });
  }
  if (!userId) {
    throw new AppError(404, "Unauthorized");
  }
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
  getSingleNewsById,
};
