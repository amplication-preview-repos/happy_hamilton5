import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Contact Number" source="contactNumber" />
        <TextInput label="Customer Name" source="customerName" />
        <TextInput label="Email Address" source="emailAddress" type="email" />
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Last Contacted Date" source="lastContactedDate" />
      </SimpleForm>
    </Edit>
  );
};
