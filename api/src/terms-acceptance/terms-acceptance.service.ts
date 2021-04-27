import { Injectable } from '@nestjs/common';
import { CreateTermsAcceptanceDto } from './dto/create-terms-acceptance.dto';
import { UpdateTermsAcceptanceDto } from './dto/update-terms-acceptance.dto';

@Injectable()
export class TermsAcceptanceService {
  create(createTermsAcceptanceDto: CreateTermsAcceptanceDto) {
    return 'This action adds a new termsAcceptance';
  }

  findAll() {
    return `This action returns all termsAcceptance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} termsAcceptance`;
  }

  update(id: number, updateTermsAcceptanceDto: UpdateTermsAcceptanceDto) {
    return `This action updates a #${id} termsAcceptance`;
  }

  remove(id: number) {
    return `This action removes a #${id} termsAcceptance`;
  }
}
