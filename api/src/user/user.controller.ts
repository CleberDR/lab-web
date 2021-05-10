import { 
  Body, 
  Controller, 
  Get, 
  Post, 
  Patch, 
  Delete, 
  Param, 
  Query,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { 
  CreateUserDTO, 
  UpdateUserDTO,  
} from './dto';
import { ListAllEntities } from '../query.dto';
import { UserService } from './user.service'

@ApiTags('Users')
@Controller('users')
export class UserController {
  
    constructor(private readonly userService: UserService) {}

    @Post('/')
    @ApiCreatedResponse({
      description: 'Usuário cadastrado com sucesso',
      type: CreateUserDTO,
    })
    async create(
      @Body() userData: CreateUserDTO,
    ): Promise<CreateUserDTO> {
      return await this.userService.create(userData);
    }

    @Get(':id')
    @ApiCreatedResponse({
      type: CreateUserDTO,
    })
    async findOne(@Param('id') id: string) {
      return await this.userService.findOne({id: parseInt(id, 10)});
    }
  
    @Get()
    @ApiCreatedResponse({
      type: [CreateUserDTO],
    })
    async findAll(@Query() query: ListAllEntities) {
      const queryParams = {
        where: (query?.where && JSON.parse(query?.where)) || {},
        skip: query?.skip || undefined,
        take: query?.take || undefined,
        cursor: query?.cursor && { id: +query?.cursor } || undefined,
        orderBy: (query?.orderBy && JSON.parse(query?.orderBy)) || {},
      }  
      return await this.userService.findAll(queryParams);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({
      description: 'Usuário editado com sucesso',
      type: CreateUserDTO,
    })
    async update(@Param('id') id: string, @Body() updateUserData: UpdateUserDTO) {
      console.log(id);
      return await this.userService.update({
        where: {id: parseInt(id, 10)},
        data: updateUserData
      });
    }
  
    @Delete(':id')
    @ApiCreatedResponse({
      description: 'Usuário deletado com sucesso',
      type: CreateUserDTO,
    })
    async remove(@Param('id') id: string) {
      return await this.userService.delete(
        {id: parseInt(id, 10)}
      );
    }
  
    
}
