-- CreateTable
CREATE TABLE `aceite_termo_usuario` (
    `id_aceite_termo_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `id_avaliacao` INTEGER,
    `id_usuario` INTEGER,
    `uuid` TEXT,
    `data_criacao` TIMESTAMP(0),
    `eh_anonimo` BOOLEAN,
INDEX `id_avaliacao`(`id_avaliacao`),
INDEX `id_usuario`(`id_usuario`),

    PRIMARY KEY (`id_aceite_termo_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autenticacao` (
    `id_autenticacao` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER,
    `senha` TEXT,
INDEX `id_usuario`(`id_usuario`),

    PRIMARY KEY (`id_autenticacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avaliacao` (
    `id_avaliacao` INTEGER NOT NULL AUTO_INCREMENT,
    `id_semestre` INTEGER,
    `titulo` TEXT,
    `objetivo` TEXT,
    `dataInicio` TIMESTAMP(0),
    `dataFim` TIMESTAMP(0),
    `eh_anonimo` BOOLEAN,
    `status` BOOLEAN,
    `url` TEXT,
INDEX `id_semestre`(`id_semestre`),

    PRIMARY KEY (`id_avaliacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avaliacao_questao_grupo` (
    `id_avaliacao_questao_grupo` INTEGER NOT NULL AUTO_INCREMENT,
    `id_avaliacao` INTEGER,
    `id_questao_grupo` INTEGER,
    `posicao` INTEGER,
INDEX `id_avaliacao`(`id_avaliacao`),
INDEX `id_questao_grupo`(`id_questao_grupo`),

    PRIMARY KEY (`id_avaliacao_questao_grupo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classe` (
    `id_classe` INTEGER NOT NULL AUTO_INCREMENT,
    `id_disciplina` INTEGER,
    `id_semestre` INTEGER,
    `titulo` TEXT,
INDEX `id_disciplina`(`id_disciplina`),
INDEX `id_semestre`(`id_semestre`),

    PRIMARY KEY (`id_classe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `curso` (
    `id_curso` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` TEXT,
    `titulo` TEXT,

    PRIMARY KEY (`id_curso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciplina` (
    `id_disciplina` INTEGER NOT NULL AUTO_INCREMENT,
    `id_curso` INTEGER,
    `codigo` TEXT,
    `titulo` TEXT,
INDEX `id_curso`(`id_curso`),

    PRIMARY KEY (`id_disciplina`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estudante_classe` (
    `id_estudante_classe` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER,
    `id_classe` INTEGER,
INDEX `id_classe`(`id_classe`),
INDEX `id_usuario`(`id_usuario`),

    PRIMARY KEY (`id_estudante_classe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professor` (
    `id_professor` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER,
INDEX `id_usuario`(`id_usuario`),

    PRIMARY KEY (`id_professor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professor_classe` (
    `id_professor_classe` INTEGER NOT NULL AUTO_INCREMENT,
    `id_professor` INTEGER,
    `id_classe` INTEGER,
INDEX `id_classe`(`id_classe`),
INDEX `id_professor`(`id_professor`),

    PRIMARY KEY (`id_professor_classe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questao` (
    `id_questao` INTEGER NOT NULL AUTO_INCREMENT,
    `id_avaliacao_questao_grupo` INTEGER,
    `pergunta` TEXT,
    `eh_obrigatoria` BOOLEAN,
    `posicao` INTEGER,
    `link_imagem` TEXT,
INDEX `id_avaliacao_questao_grupo`(`id_avaliacao_questao_grupo`),

    PRIMARY KEY (`id_questao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questao_grupo` (
    `id_questao_grupo` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` TEXT,
    `eh_atrelado_disciplina` BOOLEAN,

    PRIMARY KEY (`id_questao_grupo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resposta_usuario` (
    `id_resposta_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `id_questao` INTEGER,
    `id_aceite_termo_usuario` INTEGER,
    `resposta` INTEGER,
INDEX `id_aceite_termo_usuario`(`id_aceite_termo_usuario`),
INDEX `id_questao`(`id_questao`),

    PRIMARY KEY (`id_resposta_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resposta_usuario_classe` (
    `id_resposta_usuario_classe` INTEGER NOT NULL AUTO_INCREMENT,
    `id_classe` INTEGER,
    `id_resposta_usuario` INTEGER,
    `resposta` INTEGER,
INDEX `id_classe`(`id_classe`),
INDEX `id_resposta_usuario`(`id_resposta_usuario`),

    PRIMARY KEY (`id_resposta_usuario_classe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `semestre` (
    `id_semestre` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` TEXT,
    `data_inicio` TIMESTAMP(0),
    `data_fim` TIMESTAMP(0),

    PRIMARY KEY (`id_semestre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11),
    `matricula` TEXT,
    `tipo_usuario` INTEGER,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aceite_termo_usuario` ADD FOREIGN KEY (`id_avaliacao`) REFERENCES `avaliacao`(`id_avaliacao`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aceite_termo_usuario` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `autenticacao` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacao` ADD FOREIGN KEY (`id_semestre`) REFERENCES `semestre`(`id_semestre`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacao_questao_grupo` ADD FOREIGN KEY (`id_avaliacao`) REFERENCES `avaliacao`(`id_avaliacao`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacao_questao_grupo` ADD FOREIGN KEY (`id_questao_grupo`) REFERENCES `questao_grupo`(`id_questao_grupo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classe` ADD FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina`(`id_disciplina`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classe` ADD FOREIGN KEY (`id_semestre`) REFERENCES `semestre`(`id_semestre`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disciplina` ADD FOREIGN KEY (`id_curso`) REFERENCES `curso`(`id_curso`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estudante_classe` ADD FOREIGN KEY (`id_classe`) REFERENCES `classe`(`id_classe`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estudante_classe` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `professor` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `professor_classe` ADD FOREIGN KEY (`id_classe`) REFERENCES `classe`(`id_classe`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `professor_classe` ADD FOREIGN KEY (`id_professor`) REFERENCES `professor`(`id_professor`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `questao` ADD FOREIGN KEY (`id_avaliacao_questao_grupo`) REFERENCES `avaliacao_questao_grupo`(`id_avaliacao_questao_grupo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resposta_usuario` ADD FOREIGN KEY (`id_aceite_termo_usuario`) REFERENCES `aceite_termo_usuario`(`id_aceite_termo_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resposta_usuario` ADD FOREIGN KEY (`id_questao`) REFERENCES `questao`(`id_questao`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resposta_usuario_classe` ADD FOREIGN KEY (`id_classe`) REFERENCES `classe`(`id_classe`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resposta_usuario_classe` ADD FOREIGN KEY (`id_resposta_usuario`) REFERENCES `resposta_usuario`(`id_resposta_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;
