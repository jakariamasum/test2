import { model, Schema } from "mongoose";
import { TMedia } from "./media.interface";

const mediaSchema = new Schema<TMedia>(
  {
    news_id: {
      type: Schema.Types.ObjectId,
      ref: "News",
      required: true,
    },
    media_type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Media = model<TMedia>("Media", mediaSchema);
