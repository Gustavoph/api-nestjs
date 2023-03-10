import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  // @IsStrongPassword({
  //   minLength: 6,
  //   minLowercase: 0,
  //   minUppercase: 0,
  //   minNumbers: 0,
  //   minSymbols: 0,
  // })
  @IsString()
  password: string;
}
