import { model, Schema } from "mongoose";
import { TBookmark } from "./bookmark.interface";

const bookmarkSchema = new Schema<TBookmark>({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  news_id: { type: Schema.Types.ObjectId, ref: "News", required: true },
});

export const Bookmark = model<TBookmark>("Bookmark", bookmarkSchema);
