import { SortOrder } from "../../util/SortOrder";

export type InvoiceItemOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  itemDescription?: SortOrder;
  itemName?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
