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
  CreateQuestionDTO, 
  UpdateQuestionDTO,  
} from './dto';
import { ListAllEntities } from '../query.dto';
import { QuestionService } from './question.service'

@ApiTags('Questions')
@Controller('questions')
export class QuestionController {
  
    constructor(private readonly questionService: QuestionService) {}

    @Post('/')
    @ApiCreatedResponse({
      description: 'Usuário cadastrado com sucesso',
      type: CreateQuestionDTO,
    })
    async create(
      @Body() questionData: CreateQuestionDTO,
    ): Promise<CreateQuestionDTO> {
      try {
        return await this.questionService.create(questionData);
      } catch (e) {
        return e.message
      }
    }

    @Get(':id')
    @ApiOkResponse({
      type: CreateQuestionDTO,
    })
    async findOne(@Param('id') id: string) {
      try {
        return await this.questionService.findOne({id: parseInt(id, 10)});
      } catch (e) {
        return e.message
      }
    }
  
    @Get()
    @ApiOkResponse({
      type: [CreateQuestionDTO],
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
        return await this.questionService.findAll(queryParams);
      } catch (e) {
        return e.message
      }
    }
  
    @Patch(':id')
    @ApiOkResponse({
      description: 'Usuário editado com sucesso',
      type: CreateQuestionDTO,
    })
    async update(@Param('id') id: string, @Body() updateQuestionData: UpdateQuestionDTO) {
      try {
        return await this.questionService.update({
          where: {id: parseInt(id, 10)},
          data: updateQuestionData
        });
      } catch (e) {
        return e.message
      }
    }
  
    @Delete(':id')
    @ApiOkResponse({
      description: 'Usuário deletado com sucesso',
      type: CreateQuestionDTO,
    })
    async delete(@Param('id') id: string) {
      try {
        return await this.questionService.delete(
          {id: parseInt(id, 10)}
        );
      } catch (e) {
        return e.message
      }
    }
  
    
}
