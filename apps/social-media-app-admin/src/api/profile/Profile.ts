import { JsonValue } from "type-fest";
import { Question } from "../question/Question";
import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  profilePic: JsonValue;
  questions?: Array<Question>;
  updatedAt: Date;
  user?: User | null;
};
