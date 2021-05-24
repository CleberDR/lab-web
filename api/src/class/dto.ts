import { 
    IsOptional,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Semester, Subject } from '.prisma/client';

export class CreateClassDTO {   
    title
    subjectId
    semesterId  
}

export class UpdateClassDTO {

}