import { 
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
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
}

export class UpdateUserDTO {
    @IsString()
    cpf: string

    @IsString()
    matricula: string

    @IsNumber()
    tipo: number

    @IsString()
    nome: string
}