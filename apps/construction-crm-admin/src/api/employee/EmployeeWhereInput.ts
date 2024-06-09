import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  assignments?: AssignmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  position?: StringNullableFilter;
};
