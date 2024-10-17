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
  waterMark?: string;
}

export interface SearchParams {
  lang?: string;
  dateFrom?: string;
  dateTo?: string;
  author?: string;
  category?: string;
  storyType?: "Text" | "Story" | "Video" | "All";
  status?: string;
  page?: number;
  limit?: number;
  city?: string;
}
