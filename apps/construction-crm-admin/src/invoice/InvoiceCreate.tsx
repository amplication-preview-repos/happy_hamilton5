import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { JobTitle } from "../job/JobTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="invoiceItems"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <TextInput label="Unique ID" source="uniqueId" />
      </SimpleForm>
    </Create>
  );
};
