import { Test, TestingModule } from '@nestjs/testing';
import { TermsAcceptanceController } from './terms-acceptance.controller';
import { TermsAcceptanceService } from './terms-acceptance.service';

describe('TermsAcceptanceController', () => {
  let controller: TermsAcceptanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TermsAcceptanceController],
      providers: [TermsAcceptanceService],
    }).compile();

    controller = module.get<TermsAcceptanceController>(TermsAcceptanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
