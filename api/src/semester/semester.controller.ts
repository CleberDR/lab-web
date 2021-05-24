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
  CreateSemesterDTO, 
  UpdateSemesterDTO,  
} from './dto';
import { ListAllEntities } from '../query.dto';
import { SemesterService } from './semester.service'

@ApiTags('Semesters')
@Controller('semesters')
export class SemesterController {
  
    constructor(private readonly semesterService: SemesterService) {}

    @Post('/')
    @ApiCreatedResponse({
      description: 'Usuário cadastrado com sucesso',
      type: CreateSemesterDTO,
    })
    async create(
      @Body() semesterData: CreateSemesterDTO,
    ): Promise<CreateSemesterDTO> {
      try {
        return await this.semesterService.create(semesterData);
      } catch (e) {
        return e.message
      }
    }

    @Get(':id')
    @ApiOkResponse({
      type: CreateSemesterDTO,
    })
    async findOne(@Param('id') id: string) {
      try {
        return await this.semesterService.findOne({id: parseInt(id, 10)});
      } catch (e) {
        return e.message
      }
    }
  
    @Get()
    @ApiOkResponse({
      type: [CreateSemesterDTO],
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
        return await this.semesterService.findAll(queryParams);
      } catch (e) {
        return e.message
      }
    }
  
    @Patch(':id')
    @ApiOkResponse({
      description: 'Usuário editado com sucesso',
      type: CreateSemesterDTO,
    })
    async update(@Param('id') id: string, @Body() updateSemesterData: UpdateSemesterDTO) {
      try {
        return await this.semesterService.update({
          where: {id: parseInt(id, 10)},
          data: updateSemesterData
        });
      } catch (e) {
        return e.message
      }
    }
  
    @Delete(':id')
    @ApiOkResponse({
      description: 'Usuário deletado com sucesso',
      type: CreateSemesterDTO,
    })
    async delete(@Param('id') id: string) {
      try {
        return await this.semesterService.delete(
          {id: parseInt(id, 10)}
        );
      } catch (e) {
        return e.message
      }
    }
  
    
}
