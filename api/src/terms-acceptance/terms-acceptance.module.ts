import { Module } from '@nestjs/common';
import { TermsAcceptanceService } from './terms-acceptance.service';
import { TermsAcceptanceController } from './terms-acceptance.controller';

@Module({
  controllers: [TermsAcceptanceController],
  providers: [TermsAcceptanceService]
})
export class TermsAcceptanceModule {}
