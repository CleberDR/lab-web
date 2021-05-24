import { 
    IsOptional,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDisciplineDTO {
    code     
    title   
    courseId 
    classId
}

export class UpdateDisciplineDTO {
   
}