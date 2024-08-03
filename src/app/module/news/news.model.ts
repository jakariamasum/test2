import { Schema, model, Document } from "mongoose";
import { ICategory, ILocation } from "./news.interface";

interface INews extends Document {
  title: string;
  content: string;
  tags: string[];
  img: string;
  author_id: Schema.Types.ObjectId;
  location: ILocation;
  category: ICategory;
  lang?: string;
}

const LocationSchema = new Schema<ILocation>({
  city: { type: String, required: true },
  area: { type: String },
});

const CategorySchema = new Schema<ICategory>({
  category: { type: String, required: true },
  subCategory: { type: String },
});

const NewsSchema = new Schema<INews>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    img: { type: String, required: true },
    author_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: LocationSchema, required: true },
    category: { type: CategorySchema, required: true },
    lang: { type: String, required: true},
  },
  { timestamps: true }
);

const News = model<INews>("News", NewsSchema);

export default News;
