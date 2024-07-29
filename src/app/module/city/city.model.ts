import { model, Schema } from "mongoose";

const citySchema = new Schema<TCity>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const City = model<TCity>("City", citySchema);
