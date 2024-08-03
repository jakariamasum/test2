import mongoose, { Schema, model } from "mongoose";
import { TPage } from "./page.interface";

const SectionSchema = new Schema({
  section: { type: String, required: true },
  index: { type: Number, required: true },
  backgroundColor: { type: String },
  color: { type: String },
  titleBackgroundColor: { type: String },
  titleTextColor: { type: String },
  sectionBackgroundColor: { type: String },
  sectionTextColor: { type: String },
  sectionStyle: { type: String },
  sectionTitle: { type: String },
  sectionName: { type: String },
  desktopGrids: { type: String },
  gridWidth: { type: String },
  mobileGrids: { type: String },
  limit: { type: Number },
  width: { type: Number },
  height: { type: Number },
  photoPosition: { type: String },
  photoUrl: { type: String },
});

const RowDataSchema = new Schema({
  id: { type: Number, required: true },
  backgroundColor: { type: String, required: true },
  color: { type: String, required: true },
  sections: [SectionSchema],
});

const TPageSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    img: { type: String },
    rowData: RowDataSchema,
  },
  {
    timestamps: true,
  }
);

const Page = model<TPage>("Page", TPageSchema);

export default Page;
