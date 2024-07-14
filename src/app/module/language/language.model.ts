import { model, Schema } from "mongoose";
import { TLanguage } from "./language.interface";

const languageSchema = new Schema<TLanguage>(
  {
    language_name: String,
    language_code: String,
    language_type: {
      type: String,
      enum: ["0", "1"],
      default: "1",
    },
  },
  {
    timestamps: true,
  }
);

export const Language = model<TLanguage>("Language", languageSchema);
