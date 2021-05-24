import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  QuestionGroup,
  Prisma
} from '@prisma/client';

@Injectable()
export class QuestionGroupService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.QuestionGroupCreateInput): Promise<QuestionGroup> {
    return this.prisma.questionGroup.create({
      data,
    });
  }

  async findOne(questionGroupWhereUniqueInput: Prisma.QuestionGroupWhereUniqueInput): Promise<QuestionGroup | null> {
    return this.prisma.questionGroup.findUnique({
      where: questionGroupWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.QuestionGroupWhereUniqueInput;
    where?: Prisma.QuestionGroupWhereInput;
    orderBy?: Prisma.QuestionGroupOrderByInput;
  }): Promise<QuestionGroup[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.questionGroup.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async update(params: {
    where: Prisma.QuestionGroupWhereUniqueInput;
    data: Prisma.QuestionGroupUpdateInput;
  }): Promise<QuestionGroup> {
    const { where, data } = params;
    return this.prisma.questionGroup.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.QuestionGroupWhereUniqueInput): Promise<QuestionGroup> {
    return this.prisma.questionGroup.delete({
      where,
    });
  }
}