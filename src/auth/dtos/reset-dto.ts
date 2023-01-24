import { IsJWT, IsNotEmpty, IsString } from 'class-validator';

export class AuthResetDto {
  @IsJWT()
  token: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
