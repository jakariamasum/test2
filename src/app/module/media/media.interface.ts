import { Types } from "mongoose";

export type TMedia = {
  news_id: Types.ObjectId;
  media_type: string;
  url: string;
  caption?: string;
};
