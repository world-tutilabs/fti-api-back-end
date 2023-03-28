import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
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
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
  IsJSON,
} from 'class-validator';

export class CreateFtiDto implements Partial<Fti> {
  @ApiHideProperty()
  user: any;
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
  @ApiHideProperty()
  Homologacao: CreateHomologacaoDto;
  @IsString()
  AquecedorAgua: CreateAquecedorAguaDto;
  @IsJSON()
  @IsNotEmpty()
  BicoCamaraQuente: CreateBicoCamaraQuenteDto;
  @IsJSON()
  @IsNotEmpty()
  Cavidade: CreateCavidadeDto;
  @IsJSON()
  @IsNotEmpty()
  Cursos: CreateCursosDto;
  @IsJSON()
  @IsNotEmpty()
  Dimensao: CreateDimensaoDto;
  @IsJSON()
  @IsNotEmpty()
  DispositivoSeguranca: CreateDispositivoSeguranca;
  @IsJSON()
  @IsNotEmpty()
  Dosador: CreateDosadorDto;
  @IsJSON()
  @IsNotEmpty()
  Dosagem: CreateDosagemDto;
  @IsJSON()
  @IsNotEmpty()
  Estufagem: CreateEstufagemDto;
  @ApiHideProperty()
  Images: CreateImagensDto;
  @IsJSON()
  @IsNotEmpty()
  InfoGeraisRegulagem: CreateInfoGeraisRegulagemDto;
  @IsJSON()
  @IsNotEmpty()
  Injecao: CreateInjecaoDto;
  @IsJSON()
  @IsNotEmpty()
  Pressoes: CreatePressoesDto;
  @IsJSON()
  @IsNotEmpty()
  ProgramacaoMachos: CreateProgramacaoMachosDto;
  @IsNotEmpty()
  Recalque: CreateRecalqueDto;
  @IsJSON()
  @IsNotEmpty()
  RefrigeracaoMolde: CreateRefrigeracaoMoldeDto;
  @IsJSON()
  @IsNotEmpty()
  Resumo: CreateResumoDto;
  @IsJSON()
  @IsNotEmpty()
  Sequenciador: CreateSequenciadorDto;
  @IsJSON()
  @IsNotEmpty()
  TemperaturaCilindro: CreateTemperaturaCilindroDto;
  @IsJSON()
  @IsNotEmpty()
  Tempos: CreateTemposDto;
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  img_produto: any;
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  img_camara: any;
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
