import { Schema, model } from "mongoose";
import { ICategory, ILocation, TNews } from "./news.interface";

const LocationSchema = new Schema<ILocation>({
  city: { type: String, required: true },
  area: { type: String },
});

const CategorySchema = new Schema<ICategory>({
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  subCategory: { type: Schema.Types.Mixed },
});
const StorySchema: Schema = new Schema({
  img: { type: String },
  title: { type: String },
});

const NewsSchema = new Schema<TNews>(
  {
    title: { type: String, required: true },
    content: { type: String },
    tags: { type: [String] },
    img: { type: String },
    waterMark: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    location: { type: LocationSchema },
    category: { type: CategorySchema, required: true },
    lang: { type: String },
    stories: { type: [StorySchema] },
    video: { type: String },
    status: {
      type: String,
      enum: ["published", "pending"],
      default: "pending",
    },
    publishedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const News = model<TNews>("News", NewsSchema);

export default News;
