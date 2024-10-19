import mongoose, { FilterQuery } from "mongoose";
import { SearchParams, TNews } from "./news.interface";
import News from "./news.model";

const createNewsIntoDB = async (payload: TNews) => {
  const result = await News.create(payload);
  return result;
};

const getNewsFromDB = async (lang: string, params: SearchParams) => {
  const {
    dateFrom,
    dateTo,
    author,
    category,
    status = "published",
    page = 1,
    limit = 10,
    city,
  } = params;
  console.log(params);

  const query: FilterQuery<TNews> = {};

  if (lang && lang !== "all") {
    query.lang = lang;
  }

  if (status) {
    query.status = status;
  }

  if (dateFrom || dateTo) {
    query.createdAt = {};
    if (dateFrom) {
      query.createdAt.$gte = new Date(dateFrom);
    }
    if (dateTo) {
      query.createdAt.$lte = new Date(dateTo);
    }
  }

  if (author) {
    query.author = author;
  }

  if (category) {
    query["category.category"] = category;
  }
  if (city) {
    query["location.city"] = city;
  }

  const skip = (page - 1) * limit;

  const [news] = await Promise.all([
    News.find(query)
      .populate("category.category")
      .populate("author")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
  ]);
  console.log(params);

  return news;
};
const getSingleNewsFromDB = async (id: string) => {
  const result = await News.findOne({ _id: id })
    .populate("category.category")
    .populate("author");
  return result;
};
const getNewsByLanguageFromDB = async (link: string) => {
  const currentDate = new Date();
  const result = await News.find({
    lang: link,
    publishedDate: { $lte: currentDate },
  })
    .populate("category.category")
    .populate("author");
  return result;
};
const getNewsByCategoryFromDB = async (id: string, lang?: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  let result;
  if (lang !== "all") {
    result = await News.find({
      "category.category": objectId,
      lang: lang,
      status: "published",
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
