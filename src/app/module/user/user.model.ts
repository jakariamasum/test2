import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../../config";
import { TUser } from "./user.interface";

const UserSchema: Schema = new Schema<TUser>(
  {
    title: {
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
    role: {
      type: String,
      enum: ["reporter", "admin"],
      required: true,
    },
    img: String,
    bio: String,
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
