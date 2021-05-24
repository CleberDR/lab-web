import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  Class,
  Prisma
} from '@prisma/client';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ClassCreateInput): Promise<Class> {
    return this.prisma.class.create({
      data,
    });
  }

  async findOne(classWhereUniqueInput: Prisma.ClassWhereUniqueInput): Promise<Class | null> {
    return this.prisma.class.findUnique({
      where: classWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ClassWhereUniqueInput;
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByInput;
  }): Promise<Class[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.class.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async update(params: {
    where: Prisma.ClassWhereUniqueInput;
    data: Prisma.ClassUpdateInput;
  }): Promise<Class> {
    const { where, data } = params;
    return this.prisma.class.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ClassWhereUniqueInput): Promise<Class> {
    return this.prisma.class.delete({
      where,
    });
  }
}