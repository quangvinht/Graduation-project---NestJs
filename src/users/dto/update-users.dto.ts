/* eslint-disable prettier/prettier */

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsNumberString,
  IsDateString,
  IsBooleanString,
  IsOptional,
} from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  userName?: string;

  @IsOptional()
  @IsNumberString()
  identifyCard?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsNumberString()
  @IsOptional()
  phoneNumber?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  accountName?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
