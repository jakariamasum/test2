import { Schema, model } from "mongoose";
import { TAds } from "./ads.interface";

const AdsSchema = new Schema<TAds>({
  id: { type: String, required: true },
  position: {
    type: String,
    enum: ["header", "category", "details"],
    required: true,
  },
  type: { type: String, enum: ["code", "images"], required: true },
  content: {
    type: Schema.Types.Mixed,
    required: true,
    validate: [
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: function (this: TAds, value: any) {
          if (this.type === "code") {
            return typeof value === "string";
          } else if (this.type === "images") {
            return (
              typeof value === "object" &&
              typeof value.image === "string" &&
              typeof value.link === "string"
            );
          }
          return false;
        },
        message: "Invalid content format",
      },
    ],
  },
});

export const Ads = model<TAds>("Ads", AdsSchema);
