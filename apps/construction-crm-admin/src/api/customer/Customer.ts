import { Job } from "../job/Job";

export type Customer = {
  contactNumber: string | null;
  createdAt: Date;
  customerName: string | null;
  emailAddress: string | null;
  id: string;
  jobs?: Array<Job>;
  lastContactedDate: Date | null;
  updatedAt: Date;
};
