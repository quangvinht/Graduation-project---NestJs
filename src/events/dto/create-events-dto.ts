/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import { IsArray, IsBooleanString, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  startDate: string = "YYYY-MM-DD";

  @IsString()
  @IsOptional()
  endDate: string = "YYYY-MM-DD";

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsBooleanString()
  @IsOptional()
  status: "true";
}
