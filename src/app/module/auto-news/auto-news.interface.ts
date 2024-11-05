import { Types } from "mongoose";

export interface IAutoNews {
  language: string;
  category: Types.ObjectId;
  subcategory: Types.ObjectId | string;
  author: Types.ObjectId | string;
  status: "published" | "unpublished";
  link: string;
  duration: string;
  isDeleted: boolean;
  lastCheck: Date;
  location: string | null;
}
