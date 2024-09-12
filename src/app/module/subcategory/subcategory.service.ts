import { TSubCategory } from "./subcategory.interface";
import { SubCategory } from "./subcategory.model";

const createSubCategoryIntoDB = async (payload: TSubCategory) => {
  const result = await SubCategory.create(payload);
  return result;
};

const getSubCategoryFromDB = async () => {
  const result = await SubCategory.find();
  return result;
};
const getSubCategoryByLangFromDB = async (lang: string) => {
  const result = await SubCategory.find({ lang });
  return result;
};
export const SubCategoryServices = {
  createSubCategoryIntoDB,
  getSubCategoryFromDB,
  getSubCategoryByLangFromDB,
};
