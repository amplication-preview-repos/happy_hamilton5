import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type InvoiceUpdateInput = {
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;
  job?: JobWhereUniqueInput | null;
  uniqueId?: string | null;
};
