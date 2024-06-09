import { Employee } from "../employee/Employee";
import { Job } from "../job/Job";

export type Assignment = {
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  job?: Job | null;
  startDate: Date | null;
  updatedAt: Date;
};
