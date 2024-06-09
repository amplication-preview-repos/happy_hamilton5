import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  customerName?: SortOrder;
  emailAddress?: SortOrder;
  id?: SortOrder;
  lastContactedDate?: SortOrder;
  updatedAt?: SortOrder;
};
