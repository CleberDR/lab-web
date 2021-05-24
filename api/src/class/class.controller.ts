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
  CreateClassDTO, 
  UpdateClassDTO,  
} from './dto';
import { ListAllEntities } from '../query.dto';
import { ClassService } from './class.service'

@ApiTags('Classes')
@Controller('class')
export class ClassController {
  
    constructor(private readonly classService: ClassService) {}

    @Post('/')
    @ApiCreatedResponse({
      description: 'Cadastrado com sucesso',
      type: CreateClassDTO,
    })
    async create(
      @Body() classData: CreateClassDTO,
    ): Promise<CreateClassDTO> {
      try {
        return await this.classService.create(classData);
      } catch (e) {
        return e.message
      }
    }

    @Get(':id')
    @ApiOkResponse({
      type: CreateClassDTO,
    })
    async findOne(@Param('id') id: string) {
      try {
        return await this.classService.findOne({id: parseInt(id, 10)});
      } catch (e) {
        return e.message
      }
    }
  
    @Get()
    @ApiOkResponse({
      type: [CreateClassDTO],
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
        return await this.classService.findAll(queryParams);
      } catch (e) {
        return e.message
      }
    }
  
    @Patch(':id')
    @ApiOkResponse({
      description: 'Editado com sucesso',
      type: CreateClassDTO,
    })
    async update(@Param('id') id: string, @Body() updateClassData: UpdateClassDTO) {
      try {
        return await this.classService.update({
          where: {id: parseInt(id, 10)},
          data: updateClassData
        });
      } catch (e) {
        return e.message
      }
    }
  
    @Delete(':id')
    @ApiOkResponse({
      description: 'Deletado com sucesso',
      type: CreateClassDTO,
    })
    async delete(@Param('id') id: string) {
      try {
        return await this.classService.delete(
          {id: parseInt(id, 10)}
        );
      } catch (e) {
        return e.message
      }
    }
  
    
}
