import { AssignmentUpdateManyWithoutJobsInput } from "./AssignmentUpdateManyWithoutJobsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceUpdateManyWithoutJobsInput } from "./InvoiceUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutJobsInput;
  customer?: CustomerWhereUniqueInput | null;
  invoicedMaterials?: string | null;
  invoices?: InvoiceUpdateManyWithoutJobsInput;
  quote?: number | null;
  siteLocation?: string | null;
  totalEstimate?: number | null;
};
