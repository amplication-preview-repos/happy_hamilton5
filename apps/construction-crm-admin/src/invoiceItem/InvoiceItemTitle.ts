import { InvoiceItem as TInvoiceItem } from "../api/invoiceItem/InvoiceItem";

export const INVOICEITEM_TITLE_FIELD = "itemName";

export const InvoiceItemTitle = (record: TInvoiceItem): string => {
  return record.itemName?.toString() || String(record.id);
};
