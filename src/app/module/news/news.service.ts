import mongoose from "mongoose";
import { TNews } from "./news.interface";
import News from "./news.model";

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
const getNewsByLanguageFromDB = async (lang: string) => {
  const result = await News.find({ lang: lang });
  console.log(result);
  return result;
};
const getNewsByCategoryFromDB = async (id: string, lang?: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  let result;
  if (lang) {
    result = await News.find({
      "category.category": objectId,
      lang: lang,
    }).populate("category.category");
  } else {
    result = await News.find({ "category.category": objectId }).populate({
      path: "category.category",
    });
  }
  console.log(result);
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
