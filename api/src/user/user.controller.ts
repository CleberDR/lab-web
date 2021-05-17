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
import { ApiTags, ApiCreatedResponse, ApiQuery, ApiOkResponse } from '@nestjs/swagger';
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
      try {
        return await this.userService.create(userData);
      } catch (e) {
        return e.message
      }
    }

    @Get(':id')
    @ApiOkResponse({
      type: CreateUserDTO,
    })
    async findOne(@Param('id') id: string) {
      try {
        return await this.userService.findOne({id: parseInt(id, 10)});
      } catch (e) {
        return e.message
      }
    }
  
    @Get()
    @ApiOkResponse({
      type: [CreateUserDTO],
    })
    @ApiQuery({
      description: 'Filtra',
      name: 'where',
      example: '{"key":"value"}',
      required: false,
      type: String,
    })
    @ApiQuery({
      description: 'Pula X registros',
      name: 'skip',
      example: '1',
      required: false,
      type: Number,
    })
    @ApiQuery({
      description: 'Retorna X registros',
      name: 'take',
      example: '2',
      required: false,
      type: Number,
    })
    @ApiQuery({
      description: 'Retorna a partir do ID X',
      name: 'cursor',
      example: '3',
      required: false,
      type: Number,
    })
    @ApiQuery({
      description: 'Ordena',
      name: 'orderBy',
      example: '{"key":"asc|desc"}',
      required: false,
      type: String,
    })
    async findAll(@Query() query: ListAllEntities) {
      try {
        const queryParams = {
          where: (query?.where && JSON.parse(query?.where)) || {},
          skip: +query?.skip || undefined,
          take: +query?.take || undefined,
          cursor: query?.cursor && { id: +query?.cursor } || undefined,
          orderBy: (query?.orderBy && JSON.parse(query?.orderBy)) || {},
        }  
        return await this.userService.findAll(queryParams);
      } catch (e) {
        return e.message
      }
    }
  
    @Patch(':id')
    @ApiOkResponse({
      description: 'Usuário editado com sucesso',
      type: CreateUserDTO,
    })
    @ApiOkResponse()
    async update(@Param('id') id: string, @Body() updateUserData: UpdateUserDTO) {
      try {
        return await this.userService.update({
          where: {id: parseInt(id, 10)},
          data: updateUserData
        });
      } catch (e) {
        return e.message
      }
    }
  
    @Delete(':id')
    @ApiOkResponse({
      description: 'Usuário deletado com sucesso',
      type: CreateUserDTO,
    })
    async remove(@Param('id') id: string) {
      try {
        return await this.userService.delete(
          {id: parseInt(id, 10)}
        );
      } catch (e) {
        return e.message
      }
    }
  
    
}
