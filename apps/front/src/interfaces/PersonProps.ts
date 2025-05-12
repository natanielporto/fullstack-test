import { UserSchema } from "@mosano-test-fullstack/schemas";

export interface PersonProps extends UserSchema {
  _id: string;
}
