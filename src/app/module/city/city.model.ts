import { model, Schema } from "mongoose";
import { TCity } from "./city.interface";

const citySchema = new Schema<TCity>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const City = model<TCity>("City", citySchema);
