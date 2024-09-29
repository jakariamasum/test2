import { Schema, model } from "mongoose";
import { TSetting } from "./settings.interface";

const settingSchema = new Schema<TSetting>({
  metaDescription: { type: String },
  description: { type: String },
  privacy: { type: String },
  terms: { type: String },
  logo: { type: String },
  favicon: { type: String },
  lotoImg: { type: String },
  metaImg: { type: String },
  title: { type: String },
  bgColor: { type: String },
  copyright: { type: String },
  content: { type: String },
});

export const Setting = model<TSetting>("Setting", settingSchema);
