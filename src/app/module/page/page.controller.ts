import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { pageServices } from "./page.service";

const createPage = catchAsync(async (req, res) => {
  const result = await pageServices.createPageIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Page created successfully!",
    data: result,
  });
});

const getPages = catchAsync(async (req, res) => {
  const result = await pageServices.getPageFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Pages retrived successfully!",
    data: result,
  });
});

const getPageByPath = catchAsync(async (req, res) => {
  const { path } = req.params;
  const pathName = "/" + path;
  const result = await pageServices.getPageByPathFromDB(pathName);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Pages retrived successfully!",
    data: result,
  });
});
const getPageByLanguage = catchAsync(async (req, res) => {
  const { language } = req.params;
  const result = await pageServices.getPageByLanguageFromDB(language);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Pages retrived successfully!",
    data: result,
  });
});

const updatePage = catchAsync(async (req, res) => {
  const { page_id } = req.params;
  const result = await pageServices.updatePageIntoDB(page_id, req.body);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Page updated successfully!",
    data: result,
  });
});
const deletePage = catchAsync(async (req, res) => {
  const { page_id } = req.params;
  const result = await pageServices.deletePageFromDB(page_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Page delete successfully!",
    data: result,
  });
});

export const PageControllers = {
  createPage,
  getPages,
  getPageByPath,
  updatePage,
  deletePage,
  getPageByLanguage,
};
