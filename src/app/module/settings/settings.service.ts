import { TSettings } from "./settings.interface";
import { Settings } from "./settings.model";

const createSettingIntoDB = async (payload: TSettings) => {
  const result = await Settings.create(payload);
  return result;
};

const getSettingsFromDB = async () => {
  const result = await Settings.find();
  return result;
};
const updateSettingsIntoDB = async (
  id: string,
  payload: Partial<TSettings>
) => {
  const result = await Settings.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSettingsFromDB = async (id: string) => {
  const result = await Settings.findByIdAndDelete({ _id: id });
  return result;
};

export const settingServices = {
  createSettingIntoDB,
  getSettingsFromDB,
  updateSettingsIntoDB,
  deleteSettingsFromDB,
};
