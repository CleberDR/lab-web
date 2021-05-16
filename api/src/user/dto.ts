import { 
    IsOptional,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
    @ApiProperty({
        type: String,
        example: '00000000000'
    })
    @IsNotEmpty()
    @IsString()
    @Length(11, 11)
    cpf: string

    @ApiProperty({
        type: String,
        example: '000000000'
    })
    @IsNotEmpty()
    @IsString()
    enrollment: string

    @ApiProperty({
        type: Number,
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    type: number

    @ApiProperty({
        type: String,
        example: 'Uneb Uneb'
    })
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({
        type: String,
        example: 'uneb@uneb.gov.ba'
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    mail: string
}

export class UpdateUserDTO {
    @ApiProperty({
        type: String,
        example: '00000000000',
        required: false,
    })
    @IsOptional()
    @IsString()
    @Length(11, 11)
    cpf: string

    @ApiProperty({
        type: String,
        example: '000000000',
        required: false,
    })
    @IsOptional()
    @IsString()
    enrollment: string

    @ApiProperty({
        type: Number,
        example: 1,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    type: number

    @ApiProperty({
        type: String,
        example: 'Uneb Uneb',
        required: false,
    })
    @IsOptional()
    @IsString()
    name: string

    @ApiProperty({
        type: String,
        example: 'uneb@uneb.gov.ba'
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    mail: string
}