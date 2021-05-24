import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  Discipline,
  Prisma
} from '@prisma/client';

@Injectable()
export class DisciplineService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.DisciplineCreateInput): Promise<Discipline> {
    return this.prisma.discipline.create({
      data,
    });
  }

  async findOne(disciplineWhereUniqueInput: Prisma.DisciplineWhereUniqueInput): Promise<Discipline | null> {
    return this.prisma.discipline.findUnique({
      where: disciplineWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DisciplineWhereUniqueInput;
    where?: Prisma.DisciplineWhereInput;
    orderBy?: Prisma.DisciplineOrderByInput;
  }): Promise<Discipline[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.discipline.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async update(params: {
    where: Prisma.DisciplineWhereUniqueInput;
    data: Prisma.DisciplineUpdateInput;
  }): Promise<Discipline> {
    const { where, data } = params;
    return this.prisma.discipline.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.DisciplineWhereUniqueInput): Promise<Discipline> {
    return this.prisma.discipline.delete({
      where,
    });
  }
}