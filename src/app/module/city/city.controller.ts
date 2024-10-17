import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { cityServices } from "./city.service";

const createCity = catchAsync(async (req, res) => {
  const result = await cityServices.createCityIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "City created successfully!",
    data: result,
  });
});
const getAllCities = catchAsync(async (req, res) => {
  const result = await cityServices.getAllCitiesFromDB();
  console.log(result);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Cities retrived successfully!",
    data: result,
  });
});
const updateCity = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await cityServices.updateCityInDB(id, req.body);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "City updated successfully!",
    data: result,
  });
});

export const cityControllers = { createCity, getAllCities, updateCity };
