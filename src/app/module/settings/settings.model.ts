import { model, Schema } from "mongoose";
import { TSettings } from "./settings.interface";

const settigSchema = new Schema<TSettings>(
  {
    site_name: {
      type: String,
      required: true,
    },
    site_description: String,
    contact_email: {
      type: String,
      required: true,
      unique: true,
    },
    twitter: String,
    facebook: String,
    linkedin: String,
  },
  {
    timestamps: true,
  }
);

export const Settings = model<TSettings>("Setting", settigSchema);
