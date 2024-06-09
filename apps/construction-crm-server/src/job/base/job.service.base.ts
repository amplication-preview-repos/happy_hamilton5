/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Job as PrismaJob,
  Assignment as PrismaAssignment,
  Invoice as PrismaInvoice,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class JobServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.JobCountArgs, "select">): Promise<number> {
    return this.prisma.job.count(args);
  }

  async jobs<T extends Prisma.JobFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindManyArgs>
  ): Promise<PrismaJob[]> {
    return this.prisma.job.findMany<Prisma.JobFindManyArgs>(args);
  }
  async job<T extends Prisma.JobFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindUniqueArgs>
  ): Promise<PrismaJob | null> {
    return this.prisma.job.findUnique(args);
  }
  async createJob<T extends Prisma.JobCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobCreateArgs>
  ): Promise<PrismaJob> {
    return this.prisma.job.create<T>(args);
  }
  async updateJob<T extends Prisma.JobUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobUpdateArgs>
  ): Promise<PrismaJob> {
    return this.prisma.job.update<T>(args);
  }
  async deleteJob<T extends Prisma.JobDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobDeleteArgs>
  ): Promise<PrismaJob> {
    return this.prisma.job.delete(args);
  }

  async findAssignments(
    parentId: string,
    args: Prisma.AssignmentFindManyArgs
  ): Promise<PrismaAssignment[]> {
    return this.prisma.job
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .assignments(args);
  }

  async findInvoices(
    parentId: string,
    args: Prisma.InvoiceFindManyArgs
  ): Promise<PrismaInvoice[]> {
    return this.prisma.job
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .invoices(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.job
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}