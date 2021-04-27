import { Test, TestingModule } from '@nestjs/testing';
import { TermsAcceptanceService } from './terms-acceptance.service';

describe('TermsAcceptanceService', () => {
  let service: TermsAcceptanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TermsAcceptanceService],
    }).compile();

    service = module.get<TermsAcceptanceService>(TermsAcceptanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
