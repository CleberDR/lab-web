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
  CreateUserResponseDTO, 
  UpdateUserResponseDTO,  
} from './dto';
import { ListAllEntities } from '../query.dto';
import { UserResponseService } from './userResponse.service'

@ApiTags('UserResponses')
@Controller('userResponses')
export class UserResponseController {
  
    constructor(private readonly userResponseService: UserResponseService) {}

    @Post('/')
    @ApiCreatedResponse({
      description: 'Usuário cadastrado com sucesso',
      type: CreateUserResponseDTO,
    })
    async create(
      @Body() userResponseData: CreateUserResponseDTO,
    ): Promise<CreateUserResponseDTO> {
      try {
        return await this.userResponseService.create(userResponseData);
      } catch (e) {
        return e.message
      }
    }

    @Get(':id')
    @ApiOkResponse({
      type: CreateUserResponseDTO,
    })
    async findOne(@Param('id') id: string) {
      try {
        return await this.userResponseService.findOne({id: parseInt(id, 10)});
      } catch (e) {
        return e.message
      }
    }
  
    @Get()
    @ApiOkResponse({
      type: [CreateUserResponseDTO],
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
        return await this.userResponseService.findAll(queryParams);
      } catch (e) {
        return e.message
      }
    }
  
    @Patch(':id')
    @ApiOkResponse({
      description: 'Usuário editado com sucesso',
      type: CreateUserResponseDTO,
    })
    async update(@Param('id') id: string, @Body() updateUserResponseData: UpdateUserResponseDTO) {
      try {
        return await this.userResponseService.update({
          where: {id: parseInt(id, 10)},
          data: updateUserResponseData
        });
      } catch (e) {
        return e.message
      }
    }
  
    @Delete(':id')
    @ApiOkResponse({
      description: 'Usuário deletado com sucesso',
      type: CreateUserResponseDTO,
    })
    async delete(@Param('id') id: string) {
      try {
        return await this.userResponseService.delete(
          {id: parseInt(id, 10)}
        );
      } catch (e) {
        return e.message
      }
    }
  
    
}
