import { AssignmentCreateNestedManyWithoutEmployeesInput } from "./AssignmentCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutEmployeesInput;
  name?: string | null;
  phone?: string | null;
  position?: string | null;
};
