import { StringFilter } from "../../util/StringFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type QuestionWhereInput = {
  id?: StringFilter;
  profile?: ProfileWhereUniqueInput;
};
