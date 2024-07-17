import { model, Schema } from "mongoose";
import { TPage } from "./page.interface";

const pageSchema = new Schema<TPage>({
  name: { type: String, required: true },
  tag: { type: String, required: true, unique: true },
  description: { type: String },
  layout_type: { type: String, required: true },
  rows: { type: Number, required: true },
  columns_per_row: { type: Schema.Types.Mixed, required: true }, // JSON object
});

export const Page = model<TPage>("Page", pageSchema);
