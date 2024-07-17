import { Types } from "mongoose";

export type TCategory = {
  name: string;
  description?: string;
  parent_category_id?: Types.ObjectId;
};
