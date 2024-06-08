import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  profilePic?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
