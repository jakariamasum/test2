import { model, Schema } from "mongoose";
import { TArea } from "./area.interface";

const areaSchema = new Schema<TArea>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Area = model<TArea>("Area", areaSchema);
