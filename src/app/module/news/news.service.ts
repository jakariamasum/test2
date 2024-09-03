import mongoose from "mongoose";
import { TNews } from "./news.interface";
import News from "./news.model";

const createNewsIntoDB = async (payload: TNews) => {
  const result = await News.create(payload);
  return result;
};

const getNewsFromDB = async (lang?: string) => {
  console.log("lang", lang);
  let result;
  if (lang !== "all") {
    result = await News.find({ lang: lang })
      .populate("category.category")
      .populate("author");
  } else {
    result = await News.find().populate("category.category").populate("author");
  }
  return result;
};
const getSingleNewsFromDB = async (id: string) => {
  const result = await News.findOne({ _id: id })
    .populate("category.category")
    .populate("author");
  return result;
};
const getNewsByLanguageFromDB = async (link: string) => {
  console.log(link);
  const result = await News.find({ lang: link })
    .populate("category.category")
    .populate("author");
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
    result = await News.find({ "category.category": objectId })
      .populate({
        path: "category.category",
      })
      .populate("author");
  }
  console.log(result);
  return result;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getNewsByUserFromDB = async (id: any) => {
  const result = await News.find({ author: id })
    .populate("category.category")
    .populate("author");
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
