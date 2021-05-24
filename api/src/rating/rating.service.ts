import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  Rating,
  Prisma
} from '@prisma/client';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RatingCreateInput): Promise<Rating> {
    return this.prisma.rating.create({
      data,
    });
  }

  async findOne(ratingWhereUniqueInput: Prisma.RatingWhereUniqueInput): Promise<Rating | null> {
    return this.prisma.rating.findUnique({
      where: ratingWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RatingWhereUniqueInput;
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByInput;
  }): Promise<Rating[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.rating.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async update(params: {
    where: Prisma.RatingWhereUniqueInput;
    data: Prisma.RatingUpdateInput;
  }): Promise<Rating> {
    const { where, data } = params;
    return this.prisma.rating.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.RatingWhereUniqueInput): Promise<Rating> {
    return this.prisma.rating.delete({
      where,
    });
  }
}