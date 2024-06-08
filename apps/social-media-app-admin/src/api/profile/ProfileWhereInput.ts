import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  profilePic?: JsonFilter;
  questions?: QuestionListRelationFilter;
  user?: UserWhereUniqueInput;
};
