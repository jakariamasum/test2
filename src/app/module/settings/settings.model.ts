import { Schema, model } from "mongoose";
import { TSetting } from "./settings.interface";

const settingSchema = new Schema<TSetting>({
  metaDescription: { type: String },
  description: { type: String },
  privacy: { type: String },
  terms: { type: String },
  orderPolicy: { type: String },
  logo: { type: String },
  favicon: { type: String },
  lotoImg: { type: String },
  metaImg: { type: String },
  title: { type: String },
  bgColor: { type: String },
  country: { type: String },
  currencySymbol: { type: String },
  copyright: { type: String },
  deliveryMethod1: { type: String },
  deliveryMethod2: { type: String },
  pickupMethod1: { type: String },
  pickupMethod2: { type: String },
  paymentMethod: { type: String },
  paymentText1: { type: String },
  paymentText2: { type: String },
  officeAddress: { type: String },
  whatsApp: { type: Number },
  telegram: { type: String },
  kindlyNote: { type: String },
  order: { type: String },
  orderText: { type: String },
  content: { type: String },
});

export const Setting = model<TSetting>("Setting", settingSchema);
