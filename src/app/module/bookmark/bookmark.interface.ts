import { Types } from "mongoose";

export type TBookmark = {
  user_id: Types.ObjectId;
  news_id: Types.ObjectId;
};
