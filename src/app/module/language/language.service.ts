import mongoose from "mongoose";
import { TPage } from "../page/page.interface";
import { Page } from "../page/page.model";
import { TLanguage } from "./language.interface";
import { Language } from "./language.model";

const createLanguageIntoDB = async (payload: TLanguage) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const newLanguage = await Language.create([payload], { session });

    const pageInfo: TPage = {
      title: newLanguage[0].title,
      language: newLanguage[0].language_code,
      rows: [],
    };

    await Page.create(pageInfo);
    await session.commitTransaction();

    return newLanguage[0];
  } catch (error) {
    await session.abortTransaction();
    console.error("Error creating language:", error);
    throw new Error("Failed to create language");
  } finally {
    session.endSession();
  }
};
const getAllLanguageFromDB = async (lang?: string) => {
  let result;
  if (lang) {
    result = await Language.findOne({ language_code: lang });
  } else {
    result = await Language.find();
  }
  return result;
};

const updateLanguageIntoDB = async (
  id: string,
  payload: Partial<TLanguage>
) => {
  const result = await Language.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const languageServices = {
  createLanguageIntoDB,
  getAllLanguageFromDB,
  updateLanguageIntoDB,
};
