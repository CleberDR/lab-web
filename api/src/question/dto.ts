import { 
    IsOptional,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDTO {
    text               
    isRequired         
    position            
    imageUrl          
}

export class UpdateQuestionDTO {
   
}