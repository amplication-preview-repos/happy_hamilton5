import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assignments"
          reference="Assignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssignmentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput
          label="Invoiced Materials"
          multiline
          source="invoicedMaterials"
        />
        <ReferenceArrayInput
          source="invoices"
          reference="Invoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Quote" source="quote" />
        <TextInput label="Site Location" source="siteLocation" />
        <NumberInput label="Total Estimate" source="totalEstimate" />
      </SimpleForm>
    </Edit>
  );
};
