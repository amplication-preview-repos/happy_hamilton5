import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "siteLocation";

export const JobTitle = (record: TJob): string => {
  return record.siteLocation?.toString() || String(record.id);
};
