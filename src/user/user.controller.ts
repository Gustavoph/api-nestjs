import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Patch,
  Delete,
  Controller,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { ParamId } from 'src/decorators/param-id-decorator';
import { LogInterceptor } from 'src/interceptors/log-interceptor';
import { CreateUserDto } from './dtos/create-user';
import { UpdateUserDto, UpdateUserPartialDto } from './dtos/update-user';
import { UserService } from './user.service';

// @UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Get()
  async listMany() {
    return this.userService.listMany();
  }

  @Get(':id')
  async listOne(@ParamId() id: number) {
    return this.userService.listOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.update(id, body);
  }

  @Patch(':id')
  async updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserPartialDto,
  ) {
    return this.userService.updatePartial(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
