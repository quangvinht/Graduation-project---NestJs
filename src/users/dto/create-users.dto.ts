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
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsNumberString()
  identifyCard: string;

  @IsDateString()
  birthDate: string;

  @IsNumberString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  avatarUrl: string;
}
