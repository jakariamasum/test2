import { TAnalytics } from "./analytics.interface";
import { Analytics } from "./analytics.model";

const createAnalyticsIntoDB = async (payload: TAnalytics) => {
  const result = await Analytics.create(payload);
  return result;
};

const getAnalyticsFromDB = async () => {
  const result = await Analytics.find();
  return result;
};
const updateAnalyticsIntoDB = async (
  id: string,
  payload: Partial<TAnalytics>
) => {
  const result = await Analytics.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteAnalyticsFromDB = async (id: string) => {
  const result = await Analytics.findByIdAndDelete({ _id: id });
  return result;
};

export const analyticsServices = {
  createAnalyticsIntoDB,
  getAnalyticsFromDB,
  updateAnalyticsIntoDB,
  deleteAnalyticsFromDB,
};
