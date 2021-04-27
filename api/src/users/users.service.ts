import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return [`findAll`]
  }

  findOne(id: number) {
    return `findOne ${id}`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `update ${id}`
  }

  remove(id: number) {
    return `remove ${id}`
  }
}
