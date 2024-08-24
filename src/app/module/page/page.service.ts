import { TPage } from "./page.interface";
import { Page } from "./page.model";

const createPageIntoDB = async (payload: TPage) => {
  const result = await Page.create(payload);
  return result;
};

const getPageFromDB = async () => {
  const result = await Page.find();
  console.log(result);
  return result;
};

const getPageByPathFromDB = async (path?: string) => {
  const result = await Page.findOne({ path: path }).select("rows");
  return result;
};

const updatePageIntoDB = async (id: string, payload: Partial<TPage>) => {
  const result = await Page.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deletePageFromDB = async (id: string) => {
  const result = await Page.findByIdAndDelete({ _id: id });
  return result;
};

export const pageServices = {
  createPageIntoDB,
  getPageFromDB,
  getPageByPathFromDB,
  updatePageIntoDB,
  deletePageFromDB,
};
