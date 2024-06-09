import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Contact Number" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer Name" source="customerName" />
        <TextField label="Email Address" source="emailAddress" />
        <TextField label="ID" source="id" />
        <TextField label="Last Contacted Date" source="lastContactedDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Job" target="customerId" label="Jobs">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
