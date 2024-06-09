import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Contact Number" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer Name" source="customerName" />
        <TextField label="Email Address" source="emailAddress" />
        <TextField label="ID" source="id" />
        <TextField label="Last Contacted Date" source="lastContactedDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};