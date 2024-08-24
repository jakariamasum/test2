import { model, Schema } from "mongoose";
import { TPage, TRowData, TSectionData } from "./page.interface";

const SectionDataSchema = new Schema<TSectionData>({
  sectionTitle: { type: String, required: true },
  backgroundColor: { type: String },
  desktopGrid: { type: String },
  color: { type: String },
  mobileGrid: { type: String },
  sectionLimit: { type: String },
  imgPosition: { type: String },
});

const RowDataSchema = new Schema<TRowData>({
  color: { type: String },
  backgroundColor: { type: String },
  index: { type: Number },
  sections: { type: [SectionDataSchema] },
});

const PageSchema = new Schema<TPage>({
  title: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  rows: { type: [RowDataSchema], required: true },
  language: { type: String, required: true },
  path: { type: String, required: true },
});

export const Page = model<TPage>("Page", PageSchema);
