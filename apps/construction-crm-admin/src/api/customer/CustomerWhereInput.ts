import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CustomerWhereInput = {
  contactNumber?: StringNullableFilter;
  customerName?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  lastContactedDate?: DateTimeNullableFilter;
};
