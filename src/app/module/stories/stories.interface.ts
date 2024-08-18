import { Types } from "mongoose";

export type TBanner = {
  img: string;
  title: string;
};

export type TStory = {
  title: string;
  category: Types.ObjectId;
  subCategory?: Types.ObjectId | string;
  banners: TBanner[];
};
