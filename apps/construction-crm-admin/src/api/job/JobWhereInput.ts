import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type JobWhereInput = {
  assignments?: AssignmentListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  invoicedMaterials?: StringNullableFilter;
  invoices?: InvoiceListRelationFilter;
  quote?: FloatNullableFilter;
  siteLocation?: StringNullableFilter;
  totalEstimate?: FloatNullableFilter;
};
