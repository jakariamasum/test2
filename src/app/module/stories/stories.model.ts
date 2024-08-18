import { model, Schema } from "mongoose";
import { TStory } from "./stories.interface";

const BannerSchema: Schema = new Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
});

const storySchema = new Schema<TStory>(
  {
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    subCategory: { type: Schema.Types.Mixed, ref: "Subcategory" },
    banners: [BannerSchema],
  },
  { timestamps: true }
);

export const Story = model<TStory>("Story", storySchema);
