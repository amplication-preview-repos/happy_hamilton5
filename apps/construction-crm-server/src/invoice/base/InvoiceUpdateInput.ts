/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";

@InputType()
class InvoiceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => InvoiceItemUpdateManyWithoutInvoicesInput,
  })
  @ValidateNested()
  @Type(() => InvoiceItemUpdateManyWithoutInvoicesInput)
  @IsOptional()
  @Field(() => InvoiceItemUpdateManyWithoutInvoicesInput, {
    nullable: true,
  })
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;

  @ApiProperty({
    required: false,
    type: () => JobWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobWhereUniqueInput)
  @IsOptional()
  @Field(() => JobWhereUniqueInput, {
    nullable: true,
  })
  job?: JobWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  uniqueId?: string | null;
}

export { InvoiceUpdateInput as InvoiceUpdateInput };
