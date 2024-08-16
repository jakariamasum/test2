import { Schema, model, Document } from "mongoose";
import { ICategory, ILocation, TNews } from "./news.interface";

const LocationSchema = new Schema<ILocation>({
  city: { type: String, required: true },
  area: { type: String },
});

const CategorySchema = new Schema<ICategory>({
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  subCategory: { type: String },
});

const NewsSchema = new Schema<TNews>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    img: { type: String, required: true },
    author_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: LocationSchema, required: true },
    category: { type: CategorySchema, required: true },
    lang: { type: String },
  },
  { timestamps: true }
);

const News = model<TNews>("News", NewsSchema);

export default News;
