import mongoose, { Schema, Document } from "mongoose";
import { UserSchema } from "@mosano-test-fullstack/schemas";

export type UserPersistence = UserSchema & Document;

const userMongooseSchema = new Schema<UserPersistence>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  country: { type: String, required: true },
  birthday: { type: String, required: true },
});

export const User = mongoose.model<UserPersistence>("User", userMongooseSchema);
