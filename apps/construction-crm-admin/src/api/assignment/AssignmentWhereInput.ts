import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type AssignmentWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
