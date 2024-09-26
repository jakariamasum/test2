import { model, Schema } from "mongoose";
import { TFileds, TPage, TRowData, TSectionData } from "./page.interface";

const categoriesSchem = new Schema<TFileds>({
  label: { type: String, required: true },
  value: { type: String, required: true },
});

const SectionDataSchema = new Schema<TSectionData>({
  sectionTitle: {
    type: String,
    default: "",
  },
  backgroundColor: { type: String },
  desktopGrid: { type: String },
  color: { type: String },
  mobileGrid: { type: String },
  sectionLimit: { type: String },
  imgPosition: { type: String },
  width: { type: String, required: true },
  box: { type: String, required: true },
  categories: { type: [categoriesSchem], required: true },
});

const RowDataSchema = new Schema<TRowData>({
  textColor: { type: String },
  bgColor: { type: String },
  id: { type: Number },
  sections: { type: [SectionDataSchema] },
});

const PageSchema = new Schema<TPage>({
  title: { type: String, required: true },
  rows: { type: [RowDataSchema], required: true },
  language: { type: String, required: true },
});

export const Page = model<TPage>("Page", PageSchema);
