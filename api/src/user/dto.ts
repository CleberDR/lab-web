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
    matricula: string

    @ApiProperty({
        type: Number,
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    tipo: number

    @ApiProperty({
        type: String,
        example: 'Uneb Uneb'
    })
    @IsNotEmpty()
    @IsString()
    nome: string

    // @ApiProperty({
    //     type: String,
    //     example: 'uneb@uneb.gov.ba'
    // })
    // @IsNotEmpty()
    // @IsString()
    // @IsEmail()
    // email: string
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
    matricula: string

    @ApiProperty({
        type: Number,
        example: 1,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    tipo: number

    @ApiProperty({
        type: String,
        example: 'Uneb Uneb',
        required: false,
    })
    @IsOptional()
    @IsString()
    nome: string

    // @ApiProperty({
    //     type: String,
    //     example: 'uneb@uneb.gov.ba'
    // })
    // @IsNotEmpty()
    // @IsString()
    // @IsEmail()
    // email: string
}