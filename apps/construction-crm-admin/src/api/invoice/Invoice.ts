import { InvoiceItem } from "../invoiceItem/InvoiceItem";
import { Job } from "../job/Job";

export type Invoice = {
  createdAt: Date;
  id: string;
  invoiceItems?: Array<InvoiceItem>;
  job?: Job | null;
  uniqueId: string | null;
  updatedAt: Date;
};
