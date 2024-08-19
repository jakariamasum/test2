import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { storiesServices } from "./stories.service";

const createStory = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await storiesServices.createStoryIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Story created successfully!",
    data: result,
  });
});
const getStory = catchAsync(async (req, res) => {
  const result = await storiesServices.getStoriesFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Stories retrived successfully!",
    data: result,
  });
});

export const storiesControllers = {
  createStory,
  getStory,
};
