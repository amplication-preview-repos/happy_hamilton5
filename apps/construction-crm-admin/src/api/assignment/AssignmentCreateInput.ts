import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type AssignmentCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  job?: JobWhereUniqueInput | null;
  startDate?: Date | null;
};
