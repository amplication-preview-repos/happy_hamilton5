import { JobUpdateManyWithoutCustomersInput } from "./JobUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  contactNumber?: string | null;
  customerName?: string | null;
  emailAddress?: string | null;
  jobs?: JobUpdateManyWithoutCustomersInput;
  lastContactedDate?: Date | null;
};
