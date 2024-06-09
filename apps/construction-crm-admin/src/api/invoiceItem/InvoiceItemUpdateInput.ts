import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type InvoiceItemUpdateInput = {
  date?: Date | null;
  invoice?: InvoiceWhereUniqueInput | null;
  itemDescription?: string | null;
  itemName?: string | null;
  quantity?: number | null;
};
