import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InvoiceItemWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
  itemDescription?: StringNullableFilter;
  itemName?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
