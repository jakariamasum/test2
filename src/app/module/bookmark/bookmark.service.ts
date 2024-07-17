import { TBookmark } from "./bookmark.interface";
import { Bookmark } from "./bookmark.model";

const createBookmarkIntoDB = async (payload: TBookmark) => {
  const result = await Bookmark.create(payload);
  return result;
};

const getBookmarkFromDB = async () => {
  const result = await Bookmark.find();
  return result;
};
const updateBookmarkIntoDB = async (
  id: string,
  payload: Partial<TBookmark>
) => {
  const result = await Bookmark.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBookmarkFromDB = async (id: string) => {
  const result = await Bookmark.findByIdAndDelete({ _id: id });
  return result;
};

export const bookmarkServices = {
  createBookmarkIntoDB,
  getBookmarkFromDB,
  updateBookmarkIntoDB,
  deleteBookmarkFromDB,
};
