import { Body, Controller, Get, Post, Patch, Delete, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO, ListAllEntities } from './dto';
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  
    constructor(private readonly userService: UserService) {}

    @Post('/')
    @UsePipes(new ValidationPipe())
    async create(
      @Body() userData: CreateUserDTO,
    ): Promise<CreateUserDTO> {
      return await this.userService.create(userData);
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    async findOne(@Param('id') id: string) {
      return await this.userService.findOne({id: +id});
    }
  
    @Get()
    @UsePipes(new ValidationPipe())
    async findAll(@Query() query: ListAllEntities) {
      const queryParams = {
        where: (query?.where && JSON.parse(query?.where)) || {},
        skip: +query?.skip || undefined,
        take: +query?.take || undefined,
        cursor: +query?.cursor && { id: +query?.cursor } || undefined,
        orderBy: (query?.orderBy && JSON.parse(query?.orderBy)) || {},
      }
      return await this.userService.findAll(queryParams);
    }
  
    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: string, @Body() updateUserData: UpdateUserDTO) {
      console.log(updateUserData)
      return await this.userService.update({
        where: {id: +id},
        data: updateUserData
      });
    }
  
    @Delete(':id')
    @UsePipes(new ValidationPipe())
    async remove(@Param('id') id: string) {
      return await this.userService.delete(
        {id: +id}
      );
    }
  
    
}
