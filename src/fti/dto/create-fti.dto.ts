import { Fti, Homologacao, AquecedorAgua, BicoCamaraQuente, Cavidade, Cursos, Dimensao,
DispositivoSeguranca, Dosador, Dosagem,
Estufagem, Imagens, InfoGeraisRegulagem, Injecao,Pressoes,
ProgramacaoMachos, Recalque, RefrigeracaoMolde, Resumo, Sequenciador, TemperaturaCilindro 
, Tempos
} from '@prisma/client';

export class CreateFtiDto implements Fti {
  id: number;
  statusId: number;
  produto: string;
  cod_produto: string;
  cod_molde: string;
  cliente: string;
  modelo: string;
  maquina: string;
  materia_prima: string;
  pigmento: string;
  cor: string;
  qtd_cavidade: number;
  createdAt: Date;
  updatedAt: Date;
  Homologacao: CreateHomologacaoDto
  AquecedorAgua: CreateAquecedorAguaDto
  BicoCamaraQuente: CreateBicoCamaraQuenteDto
  Cavidade: CreateCavidadeDto
  Cursos: CreateCursosDto
  Dimensao: CreateDimensaoDto
  DispositivoSeguranca: CreateDispositivoSeguranca
  Dosador: CreateDosadorDto
  Dosagem: CreateDosagemDto
  Estufagem: CreateEstufagemDto
  Images: CreateImagensDto
  InfoGeraisRegulagem: CreateInfoGeraisRegulagemDto
  Injecao: CreateInjecaoDto
  Pressoes: CreatePressoesDto
  ProgramacaoMachos: CreateProgramacaoMachosDto
  Recalque: CreateRecalqueDto
  RefrigeracaoMolde: CreateRefrigeracaoMoldeDto
  Resumo: CreateResumoDto
  Sequenciador: CreateSequenciadorDto
  TemperaturaCilindro: CreateTemperaturaCilindroDto
  Tempos: CreateTemposDto
}


type CreateHomologacaoDto  = Homologacao
type CreateAquecedorAguaDto = AquecedorAgua
type CreateBicoCamaraQuenteDto = BicoCamaraQuente
type CreateCavidadeDto = Cavidade
type CreateCursosDto = Cursos
type CreateDimensaoDto = Dimensao
type CreateDispositivoSeguranca = DispositivoSeguranca
type CreateDosadorDto = Dosador
type CreateDosagemDto = Dosagem
type CreateEstufagemDto = Estufagem
type CreateImagensDto = Imagens
type CreateInfoGeraisRegulagemDto = InfoGeraisRegulagem
type CreateInjecaoDto = Injecao
type CreatePressoesDto = Pressoes
type CreateProgramacaoMachosDto = ProgramacaoMachos
type CreateRecalqueDto = Recalque
type CreateRefrigeracaoMoldeDto = RefrigeracaoMolde
type CreateResumoDto = Resumo
type CreateSequenciadorDto = Sequenciador
type CreateTemperaturaCilindroDto = TemperaturaCilindro
type CreateTemposDto = Tempos