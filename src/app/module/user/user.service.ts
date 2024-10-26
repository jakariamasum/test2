import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  console.log("payload", payload);
  const result = await User.create(payload);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find({ isDeleted: false });
  return result;
};
const getSingleUserFromDB = async (email: string) => {
  const result = await User.findOne({ email: email });
  return result;
};

const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndUpdate({ _id: id }, { isDeleted: true });
  return result;
};

const loginUserFromDB = async (email: string, password: string) => {
  const user = await User.login(email, password);
  return user;
};

const changePasswordIntoDB = async (userId: string, password: string) => {
  const result = await User.findByIdAndUpdate(
    { _id: userId },
    { password: password },
    { new: true }
  );
  return result;
};

export const userServices = {
  createUserIntoDB,
  getSingleUserFromDB,
  getAllUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
  loginUserFromDB,
  changePasswordIntoDB,
};
