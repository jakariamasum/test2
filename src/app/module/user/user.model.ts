import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../../config";
import { TUser } from "./user.interface";

const UserSchema: Schema = new Schema<TUser>(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
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
