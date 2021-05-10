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
    cpf

    @ApiProperty({
        type: String,
        example: '000000000'
    })
    @IsNotEmpty()
    @IsString()
    matricula

    @ApiProperty({
        type: Number,
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    tipo

    @ApiProperty({
        type: String,
        example: 'Uneb Uneb'
    })
    @IsNotEmpty()
    @IsString()
    nome: string

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // @IsEmail()
    // email: string
}

export class UpdateUserDTO {
    @ApiProperty({
        type: String,
        example: '00000000000'
    })
    @IsOptional()
    @IsString()
    @Length(11)
    cpf

    @ApiProperty({
        type: String,
        example: '000000000'
    })
    @IsOptional()
    @IsString()
    matricula

    @ApiProperty({
        type: Number,
        example: 1
    })
    @IsOptional()
    @IsNumber()
    tipo

    @ApiProperty({
        type: String,
        example: 'Uneb Uneb'
    })
    @IsOptional()
    @IsString()
    nome
}