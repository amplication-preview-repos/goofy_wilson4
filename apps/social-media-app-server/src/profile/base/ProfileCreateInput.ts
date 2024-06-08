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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { QuestionCreateNestedManyWithoutProfilesInput } from "./QuestionCreateNestedManyWithoutProfilesInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ProfileCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profilePic?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => QuestionCreateNestedManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => QuestionCreateNestedManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => QuestionCreateNestedManyWithoutProfilesInput, {
    nullable: true,
  })
  questions?: QuestionCreateNestedManyWithoutProfilesInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { ProfileCreateInput as ProfileCreateInput };
