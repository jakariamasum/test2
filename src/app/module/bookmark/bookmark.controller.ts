import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { bookmarkServices } from "./bookmark.service";

const createBookmark = catchAsync(async (req, res) => {
  const result = await bookmarkServices.createBookmarkIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookmark created successfully!",
    data: result,
  });
});
const getBookmarks = catchAsync(async (req, res) => {
  const result = await bookmarkServices.getBookmarkFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookmark retrived successfully!",
    data: result,
  });
});
const updateBookmark = catchAsync(async (req, res) => {
  const { bookmark_id } = req.params;
  const result = await bookmarkServices.updateBookmarkIntoDB(
    bookmark_id,
    req.body
  );
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookmark updated successfully!",
    data: result,
  });
});
const deleteBookmark = catchAsync(async (req, res) => {
  const { bookmark_id } = req.params;
  const result = await bookmarkServices.deleteBookmarkFromDB(bookmark_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookmark delete successfully!",
    data: result,
  });
});

export const bookmarkControllers = {
  createBookmark,
  getBookmarks,
  updateBookmark,
  deleteBookmark,
};
