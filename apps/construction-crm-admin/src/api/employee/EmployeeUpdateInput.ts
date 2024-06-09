import { AssignmentUpdateManyWithoutEmployeesInput } from "./AssignmentUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutEmployeesInput;
  name?: string | null;
  phone?: string | null;
  position?: string | null;
};
