import { InputJsonValue } from "../../types";
import { QuestionCreateNestedManyWithoutProfilesInput } from "./QuestionCreateNestedManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  profilePic?: InputJsonValue;
  questions?: QuestionCreateNestedManyWithoutProfilesInput;
  user?: UserWhereUniqueInput | null;
};
