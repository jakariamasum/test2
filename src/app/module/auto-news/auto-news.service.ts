import { IAutoNews } from "./auto-news.interface";
import { AutoNews } from "./auto-news.model";

const createAutoNewsIntoDB = async (payload: IAutoNews) => {
  const result = await AutoNews.create(payload);
  return result;
};

const getAllAutoNewsFromDB = async () => {
  const result = await AutoNews.find({ isDeleted: false }).populate("category");
  return result;
};

const getSingleAutoNewsFromDB = async (id: string) => {
  const result = await AutoNews.findById({ _id: id });
  return result;
};

const updateAutoNewsFromDB = async (
  id: string,
  payload: Partial<IAutoNews>
) => {
  const result = await AutoNews.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteAutoNewsFromDB = async (id: string) => {
  console.log(id);
  // console.log(object);
  const news = await AutoNews.findById({ _id: id });
  console.log("news", news);
  const result = await AutoNews.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const getLatestAutoNews = async () => {
  const result = await AutoNews.find().sort({ createdAt: -1 });
  return result[0];
};

export const AutoNewsServices = {
  createAutoNewsIntoDB,
  getAllAutoNewsFromDB,
  getSingleAutoNewsFromDB,
  updateAutoNewsFromDB,
  deleteAutoNewsFromDB,
  getLatestAutoNews,
};
