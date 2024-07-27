import { model, Schema } from "mongoose";
import { TNews } from "./news.interface";

const NewsSchema = new Schema<TNews>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  summary: { type: String },
  author_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  category_id: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  page_tag: { type: String, required: true },
  publish_date: { type: Date, default: Date.now },
  status: { type: String, default: "draft", required: true },
  views: { type: Number, default: 0, required: true },
  likes: { type: Number, default: 0, required: true },
  dislikes: { type: Number, default: 0, required: true },
  language_id: { type: Schema.Types.ObjectId, ref: "Language" },
});

export const News = model<TNews>("News", NewsSchema);
