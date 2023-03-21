import {
  Fti,
  Homologacao,
  AquecedorAgua,
  BicoCamaraQuente,
  Cavidade,
  Cursos,
  Dimensao,
  DispositivoSeguranca,
  Dosador,
  Dosagem,
  Estufagem,
  Imagens,
  InfoGeraisRegulagem,
  Injecao,
  Pressoes,
  ProgramacaoMachos,
  Recalque,
  RefrigeracaoMolde,
  Resumo,
  Sequenciador,
  TemperaturaCilindro,
  Tempos,
} from '@prisma/client';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFtiDto implements Fti {
  id: number;
  statusId: number;
  @IsString()
  @IsNotEmpty()
  produto: string;
  @IsString()
  @IsNotEmpty()
  cod_produto: string;
  @IsString()
  @IsNotEmpty()
  cod_molde: string;
  @IsString()
  @IsNotEmpty()
  cliente: string;
  @IsString()
  @IsNotEmpty()
  modelo: string;
  @IsString()
  @IsNotEmpty()
  maquina: string;
  @IsString()
  @IsNotEmpty()
  materia_prima: string;
  @IsString()
  @IsNotEmpty()
  pigmento: string;
  @IsString()
  @IsNotEmpty()
  cor: string;
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  qtd_cavidade: number;
  createdAt: Date;
  updatedAt: Date;
  Homologacao: CreateHomologacaoDto;
  @IsNotEmpty()
  AquecedorAgua: CreateAquecedorAguaDto;
  @IsNotEmpty()
  BicoCamaraQuente: CreateBicoCamaraQuenteDto;
  @IsNotEmpty()
  Cavidade: CreateCavidadeDto;
  @IsNotEmpty()
  Cursos: CreateCursosDto;
  @IsNotEmpty()
  Dimensao: CreateDimensaoDto;
  @IsNotEmpty()
  DispositivoSeguranca: CreateDispositivoSeguranca;
  @IsNotEmpty()
  Dosador: CreateDosadorDto;
  @IsNotEmpty()
  Dosagem: CreateDosagemDto;
  @IsNotEmpty()
  Estufagem: CreateEstufagemDto;
  Images: CreateImagensDto;
  @IsNotEmpty()
  InfoGeraisRegulagem: CreateInfoGeraisRegulagemDto;
  @IsNotEmpty()
  Injecao: CreateInjecaoDto;
  @IsNotEmpty()
  Pressoes: CreatePressoesDto;
  @IsNotEmpty()
  ProgramacaoMachos: CreateProgramacaoMachosDto;
  @IsNotEmpty()
  Recalque: CreateRecalqueDto;
  @IsNotEmpty()
  RefrigeracaoMolde: CreateRefrigeracaoMoldeDto;
  @IsNotEmpty()
  Resumo: CreateResumoDto;
  @IsNotEmpty()
  Sequenciador: CreateSequenciadorDto;
  @IsNotEmpty()
  TemperaturaCilindro: CreateTemperaturaCilindroDto;
  @IsNotEmpty()
  Tempos: CreateTemposDto;
}

type CreateHomologacaoDto = Homologacao;
type CreateAquecedorAguaDto = AquecedorAgua;
type CreateBicoCamaraQuenteDto = BicoCamaraQuente;
type CreateCavidadeDto = Cavidade;
type CreateCursosDto = Cursos;
type CreateDimensaoDto = Dimensao;
type CreateDispositivoSeguranca = DispositivoSeguranca;
type CreateDosadorDto = Dosador;
type CreateDosagemDto = Dosagem;
type CreateEstufagemDto = Estufagem;
type CreateImagensDto = Imagens;
type CreateInfoGeraisRegulagemDto = InfoGeraisRegulagem;
type CreateInjecaoDto = Injecao;
type CreatePressoesDto = Pressoes;
type CreateProgramacaoMachosDto = ProgramacaoMachos;
type CreateRecalqueDto = Recalque;
type CreateRefrigeracaoMoldeDto = RefrigeracaoMolde;
type CreateResumoDto = Resumo;
type CreateSequenciadorDto = Sequenciador;
type CreateTemperaturaCilindroDto = TemperaturaCilindro;
type CreateTemposDto = Tempos;