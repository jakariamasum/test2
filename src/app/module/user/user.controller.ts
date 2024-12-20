import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";
import { createToken } from "../../utils/tokenGenerateFunction";
import config from "../../../config";
import bcrypt from "bcrypt";
import { User } from "./user.model";

const createUser = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await userServices.createUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User created successfully!",
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserFromDB();
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "users retrived successfully!",
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.getSingleUserFromDB(id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "users retrived successfully!",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { user_id } = req.params;
  const result = await userServices.updateUserIntoDB(user_id, req.body);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated successfully!",
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const { user_id } = req.params;
  const result = await userServices.deleteUserFromDB(user_id);
  if (!result) {
    throw new AppError(404, "No data found");
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User delete successfully!",
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await userServices.loginUserFromDB(email, password);
  if (!result) {
    throw new AppError(404, "Login failed");
  }
  const token = createToken(
    { userId: result?.email, role: result?.role },
    config.jwt_secret as string,
    config.jwt_expires_in as string
  );
  const response = { ...result, token };
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Login successfully!",
    data: response,
  });
});

const verifyUser = catchAsync(async (req, res) => {
  const decoded = req.decoded;
  const user = await userServices.getSingleUserFromDB(
    decoded?.userId as string
  );
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access - User not found",
      error: "",
    });
  }

  return res.status(200).json({ message: "User verified", data: user });
});

const changePassword = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const user = await User.findById(id as string);
  if (!user) {
    throw new AppError(404, "No user found");
  }
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds)
  );
  const result = await userServices.changePasswordIntoDB(id, hashedPassword);
  if (!result) {
    throw new AppError(404, "Something went wrong");
  }
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Password change successfully!",
    data: result,
  });
});

export const userControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  loginUser,
  verifyUser,
  changePassword,
};
