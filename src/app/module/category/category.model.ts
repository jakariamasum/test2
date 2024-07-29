import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const CategorySchema = new Schema<TCategory>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    parent_category_id: { type: Schema.Types.ObjectId, ref: "Category" },
    img: { type: String },
    position: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const Category = model<TCategory>("Category", CategorySchema);
