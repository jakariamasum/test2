import { TNews } from "./news.interface";
import { News } from "./news.model";

const createNewsIntoDB = async (payload: TNews) => {
  const result = await News.create(payload);
  return result;
};

const getNewsFromDB = async () => {
  const result = await News.find();
  return result;
};
const getSingleNewsFromDB = async (id: string) => {
  const result = await News.findOne({ _id: id });
  return result;
};
const getNewsByLanguageFromDB = async (id: string) => {
  const result = await News.find({ language_id: id });
  return result;
};
const getNewsByCategoryFromDB = async (id: string) => {
  const result = await News.find({ category_id: id });
  return result;
};
const getNewsByUserFromDB = async (id: string) => {
  const result = await News.find({ author_id: id });
  return result;
};
const updateNewsIntoDB = async (id: string, payload: Partial<TNews>) => {
  const result = await News.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteNewsFromDB = async (id: string) => {
  const result = await News.findByIdAndDelete({ _id: id });
  return result;
};

export const newsServices = {
  createNewsIntoDB,
  getNewsFromDB,
  getSingleNewsFromDB,
  getNewsByLanguageFromDB,
  getNewsByCategoryFromDB,
  getNewsByUserFromDB,
  updateNewsIntoDB,
  deleteNewsFromDB,
};
