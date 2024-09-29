import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { categoryServices } from "./category.service";
import AppError from "../../errors/AppError";

const createCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategoryIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category created successfully!",
    data: result,
  });
});
const getCategories = catchAsync(async (req, res) => {
  const result = await categoryServices.getCategoriesFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories retrived successfully!",
    data: result,
  });
});
const getCategoriesByLang = catchAsync(async (req, res) => {
  const { lang } = req.params;
  const result = await categoryServices.getCategoriesByLangFromDB(lang);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories retrived successfully!",
    data: result,
  });
});
const getSingleCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.getSingleCategoryFromDB(id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category retrived successfully!",
    data: result,
  });
});
const getVideoOrStoriesCategory = catchAsync(async (req, res) => {
  const { type } = req.query;
  const result = await categoryServices.getVideoOrStoriesCategoryFromDB(
    type as string
  );
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category retrived successfully!",
    data: result,
  });
});
const updateCategory = catchAsync(async (req, res) => {
  const { category_id } = req.params;
  const result = await categoryServices.updateCategoryIntoDB(
    category_id,
    req.body
  );
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category updated successfully!",
    data: result,
  });
});
const deleteCategory = catchAsync(async (req, res) => {
  const { category_id } = req.params;
  const result = await categoryServices.deleteCategoryFromDB(category_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Category delete successfully!",
    data: result,
  });
});

export const categoryControllers = {
  createCategory,
  getCategories,
  getCategoriesByLang,
  getSingleCategory,
  updateCategory,
  deleteCategory,
  getVideoOrStoriesCategory,
};
