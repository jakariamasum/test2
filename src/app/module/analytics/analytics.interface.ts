import { Types } from "mongoose";

export type TAnalytics = {
  news_id: Types.ObjectId;
  views: number;
  likes: number;
  dislikes: number;
  comments_count: number;
};
