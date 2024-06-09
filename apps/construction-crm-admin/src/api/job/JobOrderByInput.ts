import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  invoicedMaterials?: SortOrder;
  quote?: SortOrder;
  siteLocation?: SortOrder;
  totalEstimate?: SortOrder;
  updatedAt?: SortOrder;
};
