import { JobCreateNestedManyWithoutCustomersInput } from "./JobCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  contactNumber?: string | null;
  customerName?: string | null;
  emailAddress?: string | null;
  jobs?: JobCreateNestedManyWithoutCustomersInput;
  lastContactedDate?: Date | null;
};
