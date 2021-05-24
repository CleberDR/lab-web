import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  UserResponse,
  Prisma
} from '@prisma/client';

@Injectable()
export class UserResponseService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserResponseCreateInput): Promise<UserResponse> {
    return this.prisma.userResponse.create({
      data,
    });
  }

  async findOne(userResponseWhereUniqueInput: Prisma.UserResponseWhereUniqueInput): Promise<UserResponse | null> {
    return this.prisma.userResponse.findUnique({
      where: userResponseWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserResponseWhereUniqueInput;
    where?: Prisma.UserResponseWhereInput;
    orderBy?: Prisma.UserResponseOrderByInput;
  }): Promise<UserResponse[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.userResponse.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async update(params: {
    where: Prisma.UserResponseWhereUniqueInput;
    data: Prisma.UserResponseUpdateInput;
  }): Promise<UserResponse> {
    const { where, data } = params;
    return this.prisma.userResponse.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.UserResponseWhereUniqueInput): Promise<UserResponse> {
    return this.prisma.userResponse.delete({
      where,
    });
  }
}