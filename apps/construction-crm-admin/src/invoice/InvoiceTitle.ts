import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "uniqueId";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.uniqueId?.toString() || String(record.id);
};
