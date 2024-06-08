import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  profileId?: SortOrder;
  updatedAt?: SortOrder;
};
