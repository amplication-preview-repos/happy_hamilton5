import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};
