import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const CategorySchema = new Schema<TCategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    parent_category_id: { type: Number, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

export const Category = model<TCategory>("Category", CategorySchema);
