import { Test, TestingModule } from '@nestjs/testing';
import { QuestionGroupService } from './questionGroup.service';

describe('QuestionGroupService', () => {
  let service: QuestionGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionGroupService],
    }).compile();

    service = module.get<QuestionGroupService>(QuestionGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
