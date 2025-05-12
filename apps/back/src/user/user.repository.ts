import { UserSchema } from "@mosano-test-fullstack/schemas";

import { User, UserPersistence } from "./user.model.js";

export function createUser(data: UserSchema): Promise<UserPersistence> {
  return User.create(data);
}

export function findAllUsers(): Promise<UserPersistence[]> {
  return User.find();
}

export function findUser(id: string): Promise<UserPersistence | null> {
  return User.findById(id);
}

export function updateUser(
  id: string,
  data: Partial<UserSchema>
): Promise<UserPersistence | null> {
  return User.findByIdAndUpdate(id, data, { new: true });
}

export function deleteUser(id: string): Promise<UserPersistence | null> {
  return User.findByIdAndDelete(id);
}
