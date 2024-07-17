import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { settingServices } from "./settings.service";

const createSettings = catchAsync(async (req, res) => {
  const result = await settingServices.createSettingIntoDB(req.body);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Settings created successfully!",
    data: result,
  });
});
const getSettings = catchAsync(async (req, res) => {
  const result = await settingServices.getSettingsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Settings retrived successfully!",
    data: result,
  });
});
const updateSettings = catchAsync(async (req, res) => {
  const { setting_id } = req.params;
  const result = await settingServices.updateSettingsIntoDB(
    setting_id,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Settings updated successfully!",
    data: result,
  });
});
const deleteSettings = catchAsync(async (req, res) => {
  const { setting_id } = req.params;
  const result = await settingServices.deleteSettingsFromDB(setting_id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Settings delete successfully!",
    data: result,
  });
});

export const settingControllers = {
  createSettings,
  getSettings,
  updateSettings,
  deleteSettings,
};
