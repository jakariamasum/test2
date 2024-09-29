import { TSubCategory } from "./subcategory.interface";
import { SubCategory } from "./subcategory.model";

const createSubCategoryIntoDB = async (payload: TSubCategory) => {
  const result = await SubCategory.create(payload);
  return result;
};

const getSubCategoryFromDB = async () => {
  const result = await SubCategory.find({ type: "news" });
  return result;
};
const getSubCategoryByLangFromDB = async (lang: string) => {
  const result = await SubCategory.find({ lang, type: "news" });
  return result;
};
const getVideoOrStoriesSubCategoryFromDB = async (type: string) => {
  const result = await SubCategory.find({ type: type });
  console.log(type, result);
  return result;
};
export const SubCategoryServices = {
  createSubCategoryIntoDB,
  getSubCategoryFromDB,
  getSubCategoryByLangFromDB,
  getVideoOrStoriesSubCategoryFromDB,
};
