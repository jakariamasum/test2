import { Types } from "mongoose";

export interface ILocation {
  city: string;
  area?: string;
}

export interface ICategory {
  category: Types.ObjectId;
  subCategory?: string;
}

export interface TNews {
  title: string;
  content: string;
  tags: string[];
  img?: string;
  author: Types.ObjectId;
  location: ILocation;
  category: ICategory;
  lang?: string;
  status: "published" | "pending";
  publishedDate: Date;
}
