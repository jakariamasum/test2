import { Types } from "mongoose";

export type TNews = {
  title: string;
  content: string;
  summary?: string;
  author_id: Types.ObjectId;
  category_id: Types.ObjectId;
  page_tag: string;
  publish_date?: Date;
  status: string;
  views: number;
  likes: number;
  dislikes: number;
};
