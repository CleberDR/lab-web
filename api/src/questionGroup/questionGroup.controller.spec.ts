import { Test, TestingModule } from '@nestjs/testing';
import { QuestionGroupController } from './questionGroup.controller';
import { QuestionGroupService } from './questionGroup.service';

describe('QuestionGroupController', () => {
  let controller: QuestionGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionGroupController],
      providers: [QuestionGroupService],
    }).compile();

    controller = module.get<QuestionGroupController>(QuestionGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
