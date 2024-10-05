import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { languageServices } from "./language.service";

const createLanguage = catchAsync(async (req, res) => {
  const result = await languageServices.createLanguageIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Language created successfully!",
    data: result,
  });
});
const getAllLanguage = catchAsync(async (req, res) => {
  const { lang } = req.query;
  let result;
  if (lang) {
    result = await languageServices.getAllLanguageFromDB(lang as string);
  } else {
    result = await languageServices.getAllLanguageFromDB();
  }
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Language retrived successfully!",
    data: result,
  });
});
const updateLanguage = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await languageServices.updateLanguageIntoDB(id, req.body);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Language updated successfully!",
    data: result,
  });
});

export const languageControllers = {
  createLanguage,
  getAllLanguage,
  updateLanguage,
};
