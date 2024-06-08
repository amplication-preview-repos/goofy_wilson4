import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type QuestionCreateInput = {
  profile?: ProfileWhereUniqueInput | null;
};
