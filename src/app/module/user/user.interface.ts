import { Types } from "mongoose";

export type TName = {
  firstName: string;
  lastName: string;
};

export type TSocialLinks = {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  website?: string;
};

export type TUser = {
  username: string;
  password: string;
  email: string;
  name: TName;
  role: "reader" | "journalist" | "editor" | "admin";
  profile_picture?: string;
  bio?: string;
  social_links?: TSocialLinks;
};
