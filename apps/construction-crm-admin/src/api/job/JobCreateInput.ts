import { AssignmentCreateNestedManyWithoutJobsInput } from "./AssignmentCreateNestedManyWithoutJobsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutJobsInput } from "./InvoiceCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutJobsInput;
  customer?: CustomerWhereUniqueInput | null;
  invoicedMaterials?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutJobsInput;
  quote?: number | null;
  siteLocation?: string | null;
  totalEstimate?: number | null;
};
