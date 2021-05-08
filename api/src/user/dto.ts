import { 

    IsOptional,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length
} from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @Length(11)
    cpf: string

    @IsNotEmpty()
    @IsString()
    matricula: string

    @IsNotEmpty()
    @IsNumber()
    tipo: number

    @IsNotEmpty()
    @IsString()
    nome: string

    // @IsNotEmpty()
    // @IsString()
    // @IsEmail()
    // email: string
}

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @Length(11)
    cpf: string

    @IsOptional()
    @IsString()
    matricula: string

    @IsOptional()
    @IsNumber()
    tipo: number

    @IsOptional()
    @IsString()
    nome: string
}