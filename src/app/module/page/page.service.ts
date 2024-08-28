import { TPage } from "./page.interface";
import { Page } from "./page.model";

const createPageIntoDB = async (payload: TPage) => {
  const result = await Page.create(payload);
  return result;
};

const getPageFromDB = async () => {
  const result = await Page.find().populate({
    path: "rows.sections.sectionTitle",
    select: "title",
  });
  console.log(result);
  return result;
};

const getPageByPathFromDB = async (path?: string) => {
  const result = await Page.findOne({ path: path }).select("rows").populate({
    path: "rows.sections.sectionTitle",
    select: "title",
  });
  return result;
};
const getPageByIdFromDB = async (id: string) => {
  const result = await Page.findOne({ _id: id }).populate({
    path: "rows.sections.sectionTitle",
  });
  return result;
};
const getPageByLanguageFromDB = async (language: string) => {
  const result = await Page.findOne({ language: language });
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
  getPageByLanguageFromDB,
  getPageByIdFromDB,
};
