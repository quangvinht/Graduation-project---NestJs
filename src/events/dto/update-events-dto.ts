/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { IsArray, IsBooleanString, IsDateString, IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @IsOptional()
  startDate?: string;

  @IsString()
  @IsOptional()
  endDate?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsBooleanString()
  @IsOptional()
  status?: string;

  @IsOptional()
  participants?: string[];
}
