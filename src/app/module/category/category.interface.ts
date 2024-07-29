import { Types } from "mongoose";

export type TCategory = {
  title: string;
  description?: string;
  parent_category_id?: Types.ObjectId;
  position?: number;
  img?: string;
};
