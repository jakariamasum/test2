import { Types } from "mongoose";

export type TArea = {
  title: string;
  city: Types.ObjectId;
  isActive: boolean;
};
