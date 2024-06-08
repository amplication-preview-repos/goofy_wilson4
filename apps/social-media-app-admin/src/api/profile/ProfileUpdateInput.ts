import { InputJsonValue } from "../../types";
import { QuestionUpdateManyWithoutProfilesInput } from "./QuestionUpdateManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  bio?: string | null;
  profilePic?: InputJsonValue;
  questions?: QuestionUpdateManyWithoutProfilesInput;
  user?: UserWhereUniqueInput | null;
};
