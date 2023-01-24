import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user';
import { UpdateUserDto, UpdateUserPartialDto } from './dtos/update-user';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(request: CreateUserDto) {
    const id = (Math.random() * 20).toString();

    return this.prisma.user.create({
      data: {
        id: parseInt(id),
        ...request,
      },
    });
  }

  async listMany() {
    return this.prisma.user.findMany();
  }

  async listOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  async update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async updatePartial(id: number, data: UpdateUserPartialDto) {
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
