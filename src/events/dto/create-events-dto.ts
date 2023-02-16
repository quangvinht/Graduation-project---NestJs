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

  @IsDateString()
  @IsOptional()
  startDate: string = new Date().toISOString();

  @IsDateString()
  @IsOptional()
  endDate: string = new Date().toISOString();

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsBooleanString()
  @IsOptional()
  status: "true";
}
