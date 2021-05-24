import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  Semester,
  Prisma
} from '@prisma/client';

@Injectable()
export class SemesterService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SemesterCreateInput): Promise<Semester> {
    return this.prisma.semester.create({
      data,
    });
  }

  async findOne(semesterWhereUniqueInput: Prisma.SemesterWhereUniqueInput): Promise<Semester | null> {
    return this.prisma.semester.findUnique({
      where: semesterWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SemesterWhereUniqueInput;
    where?: Prisma.SemesterWhereInput;
    orderBy?: Prisma.SemesterOrderByInput;
  }): Promise<Semester[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.semester.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async update(params: {
    where: Prisma.SemesterWhereUniqueInput;
    data: Prisma.SemesterUpdateInput;
  }): Promise<Semester> {
    const { where, data } = params;
    return this.prisma.semester.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.SemesterWhereUniqueInput): Promise<Semester> {
    return this.prisma.semester.delete({
      where,
    });
  }
}