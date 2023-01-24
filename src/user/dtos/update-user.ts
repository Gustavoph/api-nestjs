import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user';

export class UpdateUserDto extends CreateUserDto {}

export class UpdateUserPartialDto extends PartialType(CreateUserDto) {}
