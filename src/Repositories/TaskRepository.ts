import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';
@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return this.prisma.task.findMany();
  }
  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
  async update(id: number, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }
  
  async create(data: Prisma.TaskCreateInput) {
    return this.prisma.task.create({
      data,
    });
  }
  
}