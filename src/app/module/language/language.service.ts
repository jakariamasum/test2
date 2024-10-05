import { TLanguage } from "./language.interface";
import { Language } from "./language.model";

const createLanguageIntoDB = async (payload: TLanguage) => {
  const result = await Language.create(payload);
  return result;
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
