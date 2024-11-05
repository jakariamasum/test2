import { model, Schema } from "mongoose";
import { IAutoNews } from "./auto-news.interface";

const autoNewsSchema = new Schema<IAutoNews>(
  {
    language: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, required: true, ref: "Category" },
    subcategory: { type: Schema.Types.Mixed, ref: "Subcategory" },
    duration: { type: String },
    link: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    status: { type: String },
    isDeleted: { type: Boolean, default: false },
    lastCheck: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

export const AutoNews = model<IAutoNews>("AutoNews", autoNewsSchema);
