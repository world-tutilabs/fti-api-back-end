-- CreateTable
CREATE TABLE `NovosTryouts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tryout` VARCHAR(250) NOT NULL,
    `molde` VARCHAR(250) NOT NULL,
    `cliente` VARCHAR(250) NOT NULL,
    `produto` VARCHAR(250) NOT NULL,
    `cod_produto` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fti` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produto` VARCHAR(250) NOT NULL,
    `cod_molde` VARCHAR(250) NOT NULL,
    `cliente` VARCHAR(250) NOT NULL,
    `modelo` VARCHAR(250) NOT NULL,
    `maquina` VARCHAR(250) NOT NULL,
    `materia_prima` VARCHAR(250) NOT NULL,
    `pigmento` VARCHAR(250) NOT NULL,
    `qtd_cavidade` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Homologacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `statusId` INTEGER NOT NULL,
    `revisao` INTEGER NOT NULL,

    INDEX `Homologacao_ftiId_idx`(`ftiId`),
    INDEX `Homologacao_statusId_idx`(`statusId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Status` (
    `id` INTEGER NOT NULL,
    `descricao` VARCHAR(250) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AquecedorAgua` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `check_aquecedor` INTEGER NOT NULL DEFAULT 0,

    INDEX `AquecedorAgua_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BicoCamaraQuente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `check_bico_camara_quente` VARCHAR(250) NOT NULL,
    `peso_total_injecao` VARCHAR(250) NOT NULL DEFAULT '0',
    `peso_medio_bruto` VARCHAR(250) NOT NULL DEFAULT '0',
    `peso_medio_liquido` VARCHAR(250) NOT NULL DEFAULT '0',
    `peso_galho` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `BicoCamaraQuente_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cavidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `cavidade` FLOAT NOT NULL,

    INDEX `Cavidade_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cursos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `curso_abertura` VARCHAR(250) NOT NULL DEFAULT '0',
    `curso_descompressao` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_recalque` VARCHAR(250) NOT NULL DEFAULT '0',
    `curso_avanco_extrator` VARCHAR(250) NOT NULL DEFAULT '0',
    `inicio_protecao_molde` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Cursos_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dimensao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `altura` INTEGER NOT NULL DEFAULT 0,
    `comprimento` INTEGER NOT NULL DEFAULT 0,
    `largura` INTEGER NOT NULL DEFAULT 0,
    `produto` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Dimensao_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DispositivoSeguranca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `check_dispositivo_seg` INTEGER NOT NULL,
    `sensor` INTEGER NOT NULL,
    `micro_sw` INTEGER NOT NULL,
    `fim_curso` INTEGER NOT NULL,

    INDEX `DispositivoSeguranca_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dosador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `check_dosador` INTEGER NOT NULL DEFAULT 0,
    `velocidade_dosagem` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_dosagem` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Dosador_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dosagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `dosagem_velocidade` VARCHAR(250) NOT NULL DEFAULT '0',
    `dosagem_contrapressao` VARCHAR(250) NOT NULL DEFAULT '0',
    `dosagem_pressao` VARCHAR(250) NOT NULL DEFAULT '0',
    `dosagem_posicao` VARCHAR(250) NOT NULL DEFAULT '0',
    `dosagem_tempo` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Dosagem_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estufagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fitId` INTEGER NOT NULL,
    `temperatura` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo` INTEGER NOT NULL DEFAULT 0,

    INDEX `Estufagem_fitId_idx`(`fitId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `img_produto` VARCHAR(250) NOT NULL,
    `img_camara` VARCHAR(250) NOT NULL,

    INDEX `Imagens_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfoGeraisRegulagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `bucha_injecao` VARCHAR(250) NOT NULL,
    `bico_injecao` VARCHAR(250) NOT NULL,
    `prog_injecao` VARCHAR(250) NOT NULL,
    `modo` VARCHAR(250) NOT NULL,
    `ciclo_total` VARCHAR(250) NOT NULL,
    `producao_horaria` INTEGER NOT NULL DEFAULT 0,

    INDEX `InfoGeraisRegulagem_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Injecao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `injecao_velocidade` VARCHAR(250) NOT NULL DEFAULT '0',
    `injecao_pressao` VARCHAR(250) NOT NULL DEFAULT '0',
    `injecao_posicao` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Injecao_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ObservacoesGerais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `tecnico` VARCHAR(250) NOT NULL DEFAULT '0',
    `coordernador_eng` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `ObservacoesGerais_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pressoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `pressao_media` VARCHAR(250) NOT NULL DEFAULT '0',
    `pressao_travamento` VARCHAR(250) NOT NULL DEFAULT '0',
    `pressao_avanco` VARCHAR(250) NOT NULL DEFAULT '0',
    `pressao_recuo` VARCHAR(250) NOT NULL DEFAULT '0',
    `pressao_descompressao` VARCHAR(250) NOT NULL DEFAULT '0',
    `peso_galho` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Pressoes_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgramacaoMachos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `check_prog_machos` INTEGER NOT NULL DEFAULT 0,
    `macho` JSON NOT NULL,
    `check_tempo` VARCHAR(250) NOT NULL DEFAULT '',

    INDEX `ProgramacaoMachos_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recalque` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `recalque_velocidade` VARCHAR(250) NOT NULL DEFAULT '0',
    `recalque_pressao` VARCHAR(250) NOT NULL DEFAULT '0',
    `recalque_tempo` VARCHAR(250) NOT NULL DEFAULT '0',
    `recalque_posicao` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Recalque_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RefrigeracaoMolde` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `movel` FLOAT NOT NULL,
    `flutuante` FLOAT NOT NULL,
    `fixo` FLOAT NOT NULL,
    `gaveta` FLOAT NOT NULL,

    INDEX `RefrigeracaoMolde_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resume` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `peso_total_cavidade` DOUBLE NOT NULL,
    `peso_total_injecao` DOUBLE NOT NULL,
    `peso_medio_bruto` DOUBLE NOT NULL,
    `peso_medio_liquido` DOUBLE NOT NULL,
    `peso_galho` DOUBLE NOT NULL,

    INDEX `Resume_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sequenciador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `validacao_sequenciador` INTEGER NOT NULL DEFAULT 0,
    `bico` VARCHAR(250) NOT NULL DEFAULT '0',
    `delay` VARCHAR(250) NOT NULL DEFAULT '0',
    `open` VARCHAR(250) NOT NULL DEFAULT '0',
    `modo` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Sequenciador_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TemperaturaCilindro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `bico` VARCHAR(250) NOT NULL DEFAULT '0',
    `zona` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `TemperaturaCilindro_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TemperaturaProgramada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `indice` VARCHAR(250) NOT NULL,

    INDEX `TemperaturaProgramada_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tempos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ftiId` INTEGER NOT NULL,
    `tempo_fechamento` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_injecao` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_recalque` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_resfriamento` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_abertura_molde` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_extracao` VARCHAR(250) NOT NULL DEFAULT '0',
    `tempo_retirada_remocao_peca` VARCHAR(250) NOT NULL DEFAULT '0',
    `reciclo_outros` VARCHAR(250) NOT NULL DEFAULT '0',

    INDEX `Tempos_ftiId_idx`(`ftiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Homologacao` ADD CONSTRAINT `FK1_fti_homologacao` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Homologacao` ADD CONSTRAINT `FK2_status_homologacao` FOREIGN KEY (`statusId`) REFERENCES `Status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `AquecedorAgua` ADD CONSTRAINT `FK1_fti_aquecedor_agua` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `BicoCamaraQuente` ADD CONSTRAINT `FK1_fti_bico_camara_quente` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Cavidade` ADD CONSTRAINT `FK1_fit_cavidade` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Cursos` ADD CONSTRAINT `FK1_fti_cursos` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Dimensao` ADD CONSTRAINT `FK1_fti_dimensao` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DispositivoSeguranca` ADD CONSTRAINT `FK1_fti_dispositivo_seg` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Dosador` ADD CONSTRAINT `FK1_fti_dosador` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Dosagem` ADD CONSTRAINT `FK1_fti_dosagem` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Estufagem` ADD CONSTRAINT `FK1_fti_estufagem` FOREIGN KEY (`fitId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Imagens` ADD CONSTRAINT `FK1_fti_imagens` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `InfoGeraisRegulagem` ADD CONSTRAINT `FK1_fti_info_gerais` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Injecao` ADD CONSTRAINT `FK1_fti_injecao` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ObservacoesGerais` ADD CONSTRAINT `FK1_fti_observacoes_gerais` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Pressoes` ADD CONSTRAINT `FK1_fti_pressoes` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ProgramacaoMachos` ADD CONSTRAINT `FK1_fti_prog_machos` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Recalque` ADD CONSTRAINT `FK1_fti_recalque` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `RefrigeracaoMolde` ADD CONSTRAINT `FK1_fti_refrigeracao_molde` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Resume` ADD CONSTRAINT `FK1_fti_resume` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Sequenciador` ADD CONSTRAINT `FK1_fti_sequenciador` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TemperaturaCilindro` ADD CONSTRAINT `FK1_fti_temperatura_cilindro` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TemperaturaProgramada` ADD CONSTRAINT `FK1_fti_temperatura_programada` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tempos` ADD CONSTRAINT `FK1_fti_tempos` FOREIGN KEY (`ftiId`) REFERENCES `Fti`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
