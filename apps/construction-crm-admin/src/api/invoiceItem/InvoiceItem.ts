import { Invoice } from "../invoice/Invoice";

export type InvoiceItem = {
  createdAt: Date;
  date: Date | null;
  id: string;
  invoice?: Invoice | null;
  itemDescription: string | null;
  itemName: string | null;
  quantity: number | null;
  updatedAt: Date;
};
