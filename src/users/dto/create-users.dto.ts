/* eslint-disable prettier/prettier */

import {
  IsBooleanString,
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsOptional()
  userName?: string = "";

  @IsOptional()
  @IsNumberString()
  identifyCard?: string = "000000000";

  @IsString()
  @IsOptional()
  birthDate?: string = "YYYY-MM-DD";

  @IsNumberString()
  @IsOptional()
  phoneNumber?: string = "00000000000";

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string = "";
}
