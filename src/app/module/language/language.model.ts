import { model, Schema } from "mongoose";
import { TLanguage } from "./language.interface";

const languageSchema = new Schema<TLanguage>(
  {
    title: String,
    language_code: String,
    language_type: {
      type: String,
      enum: ["0", "1"],
      default: "1",
    },
    link: {
      type: String,
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    relatedPost: { type: String },
    popularPost: { type: String },
    orderPolicy: { type: String },
    copyright: { type: String },
    privacy: { type: String },
    seeAll: { type: String },
    terms: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Language = model<TLanguage>("Language", languageSchema);
