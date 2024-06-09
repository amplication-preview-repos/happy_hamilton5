import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type AssignmentUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  job?: JobWhereUniqueInput | null;
  startDate?: Date | null;
};
