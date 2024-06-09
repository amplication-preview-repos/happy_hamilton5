import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { JobTitle } from "../job/JobTitle";

export const AssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <DateTimeInput label="End Date" source="endDate" />
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
