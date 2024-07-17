import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getCategoriesFromDB = async () => {
  const result = await Category.find();
  return result;
};
const updateCategoryIntoDB = async (
  id: string,
  payload: Partial<TCategory>
) => {
  const result = await Category.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteCategoryFromDB = async (id: string) => {
  const result = await Category.findByIdAndDelete({ _id: id });
  return result;
};

export const categoryServices = {
  createCategoryIntoDB,
  getCategoriesFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
};
