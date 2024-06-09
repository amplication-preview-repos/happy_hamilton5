import { Assignment } from "../assignment/Assignment";

export type Employee = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  id: string;
  name: string | null;
  phone: string | null;
  position: string | null;
  updatedAt: Date;
};
