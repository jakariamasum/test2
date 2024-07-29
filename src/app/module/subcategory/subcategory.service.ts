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
export const SubCategoryServices = {
  createSubCategoryIntoDB,
  getSubCategoryFromDB,
};
