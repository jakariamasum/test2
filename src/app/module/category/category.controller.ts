import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { categoryServices } from "./category.service";

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
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories retrived successfully!",
    data: result,
  });
});
const updateCategory = catchAsync(async (req, res) => {
  const { category_id } = req.params;
  const result = await categoryServices.updateCategoryIntoDB(
    category_id,
    req.body
  );
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
  updateCategory,
  deleteCategory,
};
