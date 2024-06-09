import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { JOB_TITLE_FIELD } from "./JobTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Invoiced Materials" source="invoicedMaterials" />
        <TextField label="Quote" source="quote" />
        <TextField label="Site Location" source="siteLocation" />
        <TextField label="Total Estimate" source="totalEstimate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Assignment"
          target="jobId"
          label="Assignments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Invoice" target="jobId" label="Invoices">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Unique ID" source="uniqueId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
