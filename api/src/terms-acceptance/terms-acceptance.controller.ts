import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TermsAcceptanceService } from './terms-acceptance.service';
import { CreateTermsAcceptanceDto } from './dto/create-terms-acceptance.dto';
import { UpdateTermsAcceptanceDto } from './dto/update-terms-acceptance.dto';

@Controller('terms-acceptance')
export class TermsAcceptanceController {
  constructor(private readonly termsAcceptanceService: TermsAcceptanceService) {}

  @Post()
  create(@Body() createTermsAcceptanceDto: CreateTermsAcceptanceDto) {
    return this.termsAcceptanceService.create(createTermsAcceptanceDto);
  }

  @Get()
  findAll() {
    return this.termsAcceptanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.termsAcceptanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTermsAcceptanceDto: UpdateTermsAcceptanceDto) {
    return this.termsAcceptanceService.update(+id, updateTermsAcceptanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.termsAcceptanceService.remove(+id);
  }
}
