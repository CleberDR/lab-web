import { PartialType } from '@nestjs/mapped-types';
import { CreateTermsAcceptanceDto } from './create-terms-acceptance.dto';

export class UpdateTermsAcceptanceDto extends PartialType(CreateTermsAcceptanceDto) {}
