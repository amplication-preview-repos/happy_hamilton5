import { Assignment } from "../assignment/Assignment";
import { Customer } from "../customer/Customer";
import { Invoice } from "../invoice/Invoice";

export type Job = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  invoicedMaterials: string | null;
  invoices?: Array<Invoice>;
  quote: number | null;
  siteLocation: string | null;
  totalEstimate: number | null;
  updatedAt: Date;
};
