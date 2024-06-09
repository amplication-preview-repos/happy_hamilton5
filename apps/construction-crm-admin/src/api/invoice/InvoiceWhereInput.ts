import { StringFilter } from "../../util/StringFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  id?: StringFilter;
  invoiceItems?: InvoiceItemListRelationFilter;
  job?: JobWhereUniqueInput;
  uniqueId?: StringNullableFilter;
};
