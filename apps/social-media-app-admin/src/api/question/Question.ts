import { Profile } from "../profile/Profile";

export type Question = {
  createdAt: Date;
  id: string;
  profile?: Profile | null;
  updatedAt: Date;
};
