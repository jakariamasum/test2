import { Types } from "mongoose";

export type TSocialLinks = {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  website?: string;
};

export type TPreferences = {
  categories: Types.ObjectId[];
  tags: Types.ObjectId[];
};

export type TUser = {
  username: string;
  password: string;
  email: string;
  name: string;
  role: "reader" | "journalist" | "editor" | "admin";
  profile_picture?: string;
  bio?: string;
  social_links?: TSocialLinks;
  preferences?: TPreferences;
};
