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
  CreateQuestionGroupDTO, 
  UpdateQuestionGroupDTO,  
} from './dto';
import { ListAllEntities } from '../query.dto';
import { QuestionGroupService } from './questionGroup.service'

@ApiTags('QuestionGroups')
@Controller('questionGroups')
export class QuestionGroupController {
  
    constructor(private readonly questionGroupService: QuestionGroupService) {}

    @Post('/')
    @ApiCreatedResponse({
      description: 'Usuário cadastrado com sucesso',
      type: CreateQuestionGroupDTO,
    })
    async create(
      @Body() questionGroupData: CreateQuestionGroupDTO,
    ): Promise<CreateQuestionGroupDTO> {
      try {
        return await this.questionGroupService.create(questionGroupData);
      } catch (e) {
        return e.message
      }
    }

    @Get(':id')
    @ApiOkResponse({
      type: CreateQuestionGroupDTO,
    })
    async findOne(@Param('id') id: string) {
      try {
        return await this.questionGroupService.findOne({id: parseInt(id, 10)});
      } catch (e) {
        return e.message
      }
    }
  
    @Get()
    @ApiOkResponse({
      type: [CreateQuestionGroupDTO],
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
        return await this.questionGroupService.findAll(queryParams);
      } catch (e) {
        return e.message
      }
    }
  
    @Patch(':id')
    @ApiOkResponse({
      description: 'Usuário editado com sucesso',
      type: CreateQuestionGroupDTO,
    })
    async update(@Param('id') id: string, @Body() updateQuestionGroupData: UpdateQuestionGroupDTO) {
      try {
        return await this.questionGroupService.update({
          where: {id: parseInt(id, 10)},
          data: updateQuestionGroupData
        });
      } catch (e) {
        return e.message
      }
    }
  
    @Delete(':id')
    @ApiOkResponse({
      description: 'Usuário deletado com sucesso',
      type: CreateQuestionGroupDTO,
    })
    async delete(@Param('id') id: string) {
      try {
        return await this.questionGroupService.delete(
          {id: parseInt(id, 10)}
        );
      } catch (e) {
        return e.message
      }
    }
  
    
}
