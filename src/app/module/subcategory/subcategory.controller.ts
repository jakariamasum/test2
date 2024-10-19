import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { SubCategoryServices } from "./subcategory.service";

const createSubCategory = catchAsync(async (req, res) => {
  const result = await SubCategoryServices.createSubCategoryIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sub Category created successfully!",
    data: result,
  });
});
const getSubCategory = catchAsync(async (req, res) => {
  const result = await SubCategoryServices.getSubCategoryFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sub-category retrived successfully!",
    data: result,
  });
});
const getSubCategoryByLang = catchAsync(async (req, res) => {
  const { lang } = req.params;
  const result = await SubCategoryServices.getSubCategoryByLangFromDB(lang);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sub-category retrived successfully!",
    data: result,
  });
});
const getSubCategoryByCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SubCategoryServices.getSubCategoryByCategoryFromDB(id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sub-category retrived successfully!",
    data: result,
  });
});
const getVideoOrStoriesSubCategory = catchAsync(async (req, res) => {
  const { type } = req.query;
  const result = await SubCategoryServices.getVideoOrStoriesSubCategoryFromDB(
    type as string
  );
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sub-category retrived successfully!",
    data: result,
  });
});

const updateSubCategory = catchAsync(async (req, res) => {
  const { category_id } = req.params;
  const result = await SubCategoryServices.updateSubCategoryIntoDB(
    category_id,
    req.body
  );
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sub Category updated successfully!",
    data: result,
  });
});
const deleteSubCategory = catchAsync(async (req, res) => {
  const { category_id } = req.params;
  const result = await SubCategoryServices.deleteSubCategoryFromDB(category_id);
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
export const SubCategoryControllers = {
  createSubCategory,
  getSubCategory,
  getSubCategoryByLang,
  getVideoOrStoriesSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoryByCategory,
};
