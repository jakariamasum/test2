import { TSetting } from "./settings.interface";
import { Setting } from "./settings.model";

const createSettingIntoDB = async (payload: TSetting) => {
  const result = await Setting.create(payload);
  return result;
};

const getSettingsFromDB = async () => {
  const result = await Setting.find();
  return result;
};
const updateSettingsIntoDB = async (id: string, payload: Partial<TSetting>) => {
  const result = await Setting.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSettingsFromDB = async (id: string) => {
  const result = await Setting.findByIdAndDelete({ _id: id });
  return result;
};

export const settingServices = {
  createSettingIntoDB,
  getSettingsFromDB,
  updateSettingsIntoDB,
  deleteSettingsFromDB,
};
