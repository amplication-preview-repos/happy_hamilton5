import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  uniqueId?: SortOrder;
  updatedAt?: SortOrder;
};
