import { model, Schema } from "mongoose";
import { TAnalytics } from "./analytics.interface";

const analyticsSchema = new Schema<TAnalytics>({
  news_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  dislikes: {
    type: Number,
    required: true,
  },
  comments_count: {
    type: Number,
    required: true,
  },
});

export const Analytics = model<TAnalytics>("Analytic", analyticsSchema);
