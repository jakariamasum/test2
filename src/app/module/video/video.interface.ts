import { Types } from "mongoose";

export type TCategory = {
  category: Types.ObjectId;
  subCategory?: Types.ObjectId | string;
};

export type TVideo = {
  title: string;
  video: string;
  content: string;
  tags: string[];
  category: TCategory;
};
