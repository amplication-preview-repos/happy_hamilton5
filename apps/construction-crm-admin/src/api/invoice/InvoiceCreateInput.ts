import { InvoiceItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceItemCreateNestedManyWithoutInvoicesInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type InvoiceCreateInput = {
  invoiceItems?: InvoiceItemCreateNestedManyWithoutInvoicesInput;
  job?: JobWhereUniqueInput | null;
  uniqueId?: string | null;
};
