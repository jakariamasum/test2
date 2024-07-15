import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import { TUser } from "./user.interface";
import config from "../../../config";

const UserSchema: Schema = new Schema<TUser>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    role: {
      type: String,
      enum: ["reader", "journalist", "editor", "admin"],
      required: true,
    },
    profile_picture: String,
    bio: String,
    social_links: {
      twitter: String,
      facebook: String,
      linkedin: String,
      website: String,
    },
    preferences: {
      categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
      tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

export const User = mongoose.model<TUser>("User", UserSchema);
