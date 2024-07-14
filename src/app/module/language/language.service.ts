import { TLanguage } from "./language.interface";
import { Language } from "./language.model";

const createLanguageIntoDB = async (payload: TLanguage) => {
  const result = await Language.create(payload);
  return result;
};
const getAllLanguageFromDB = async () => {
  const result = await Language.find();
  return result;
};

export const languageServices = { createLanguageIntoDB, getAllLanguageFromDB };
