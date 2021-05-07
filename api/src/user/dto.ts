import {
    Prisma
  } from '@prisma/client';

export class CreateUserDTO {
    id: number
    cpf: string
    matricula: string
    tipo: number
    nome: string
}

export class UpdateUserDTO {
    id: number
    cpf: string
    matricula: string
    tipo: number
    nome: string
}

export class ListAllEntities {
    where?: string
    skip?: number
    take?: number
    cursor?: number
    orderBy?: string
}