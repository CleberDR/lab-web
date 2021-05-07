import { 
  Body, 
  Controller, 
  Get, 
  Post, 
  Patch, 
  Delete, 
  Param, 
  Query, 
  UsePipes,
  ValidationPipe, 
  ParseIntPipe 
} from '@nestjs/common';
import { 
  CreateUserDTO, 
  UpdateUserDTO, 
  ListAllEntities 
} from './dto';
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  
    constructor(private readonly userService: UserService) {}

    @UsePipes(new ParseIntPipe())

    @Post('/')
    async create(
      @Body() userData: CreateUserDTO,
    ): Promise<CreateUserDTO> {
      return await this.userService.create(userData);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      return await this.userService.findOne({id: id});
    }
  
    @Get()
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
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserData: UpdateUserDTO) {
      return await this.userService.update({
        where: {id: id},
        data: updateUserData
      });
    }
  
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
      return await this.userService.delete(
        {id: id}
      );
    }
  
    
}
