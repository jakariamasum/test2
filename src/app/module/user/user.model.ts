import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../../config";
import { TUser } from "./user.interface";
import AppError from "../../errors/AppError";

interface TUserModel extends Model<TUser> {
  login(email: string, password: string): Promise<TUser>;
}

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

// static method to login user
UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  console.log("mdl", user);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new AppError(404, "incorrect password");
  }
  throw new AppError(404, "incorrect email");
};

export const User = mongoose.model<TUser, TUserModel>("User", UserSchema);
