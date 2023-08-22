import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  Fti,
  Homologacao,
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
  Refrigeracao,
  Resumo,
  Sequenciador,
  TemperaturaCilindro,
  Tempos,
} from '@prisma/client';
import { IsNotEmpty, IsString, IsJSON } from 'class-validator';

export class CreateFtiDto implements Partial<Fti> {
  @ApiHideProperty()
  user: any;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'LIGHT COVER FGA2232CLB/TCH2/TIB' })
  produto: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '04.129.129079.01-00' })
  cod_produto: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'MD129079' })
  cod_molde: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'technicolor' })
  cliente: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'XXXX' })
  modelo: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Máquina X' })
  maquina: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Matéria Prima',
  })
  materia_prima: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Descrição da Matéria Prima',
  })
  desc_materia_prima: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'XXXX' })
  cor: string;
  @IsNotEmpty()
  @ApiProperty({ example: '10' })
  qtd_cavidade: string;
  @ApiHideProperty()
  Homologacao: CreateHomologacaoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_bico_camara_quente":"true","check_tipos_temperatura":"k","temperatura_programada":["1","2","3","4","5","6","7","8","9","0","8","3","3","3","3","3","3","3","3","3","4","3","3","3","3"]}',
  })
  BicoCamaraQuente: CreateBicoCamaraQuenteDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '[{"cavidade":1},{"cavidade":2},{"cavidade":3},{"cavidade":4},{"cavidade":5},{"cavidade":6},{"cavidade":7},{"cavidade":8},{"cavidade":9},{"cavidade":10}]',
  })
  Cavidade: CreateCavidadeDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"curso_abertura":"3","curso_descompressao":"4","curso_avanco_extrator":"12","inicio_protecao_molde":"3"}',
  })
  Cursos: CreateCursosDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example: '{"altura":"10","comprimento":"10","largura":"10"}',
  })
  Dimensao: CreateDimensaoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example: '{"sensor":"true","micro_sw":"true"}',
  })
  DispositivoSeguranca: CreateDispositivoSeguranca;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_dosador":"true","velocidade_dosagem":"4","tempo_dosagem":"4"}',
  })
  Dosador: CreateDosadorDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"velocidade":["3","3","3","","","","","",""],"contrapressao":["3","3","3","","","","","",""],"pressao_de_dosagem":["3","3","333","","","","","",""],"posicao":["3","3","333","","","","","",""],"tempo_real":["3","3","3","","","","","",""]}',
  })
  Dosagem: CreateDosagemDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_estufagem":"true","temperatura_ini":"4","temperatura_final":"3","tempo":"4"}',
  })
  Estufagem: CreateEstufagemDto;
  @ApiHideProperty()
  Images: CreateImagensDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"bucha_injecao":"2","bico_injecao":"3","prog_injecao":"4","modo":"","ciclo_total":"5","producao_horaria":"6"}',
  })
  InfoGeraisRegulagem: CreateInfoGeraisRegulagemDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"injecao_velocidade":["1","1","1","1","1","","","",""],"injecao_pressao":["1","1","1","1","1","","","",""],"injecao_posicao":["1","1","1","1","1","","","",""]}',
  })
  Injecao: CreateInjecaoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"pressao_media":"3","pressao_travamento":"3","pressao_avanco_1":"3", "pressao_avanco_2":"3","pressao_recuo_1":"33", "pressao_recuo_2":"33", "pressao_descompressao":"3","vel_avanco_extrador_1":"3", "vel_avanco_extrador_2":"3", "vel_recuo_extrator_1":"3", "vel_recuo_extrator_2":"3", "pressao_descomp_traseira": "3","pressao_descomp_dianteira": "3","vel_descomp_traseira":"3","vel_descomp_dianteira": "3"}',
  })
  Pressoes: CreatePressoesDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_programacao_machos":"false","macho":[[{"check":"false"},{"tempo":{"entrada":"3","saida":"3"}},{"posicao":{"entrada":"3","saida":"3"}},{"pressao":{"entrada":"3","saida":"3"}},{"velocidade":{"entrada":"3","saida":"3"}}],[{"check":"false"},{"tempo":{"entrada":"3","saida":"3"}},{"posicao":{"entrada":"3","saida":"3"}},{"pressao":{"entrada":"3","saida":"3"}},{"velocidade":{"entrada":"3","saida":"3"}}],[{"check":"false"},{"tempo":{"entrada":"3","saida":"3"}},{"posicao":{"entrada":"3","saida":"3"}},{"pressao":{"entrada":"3","saida":"3"}},{"velocidade":{"entrada":"3","saida":"3"}}],[{"check":"false"},{"tempo":{"entrada":"3","saida":"3"}},{"posicao":{"entrada":"3","saida":"3"}},{"pressao":{"entrada":"3","saida":"3"}},{"velocidade":{"entrada":"3","saida":"3"}}]]}',
  })
  ProgramacaoMachos: CreateProgramacaoMachosDto;
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"velocidade":["3","3","3","3","","","","",""],"pressao":["3","3","3","33","","","","",""],"tempo":["3","3","3","3","","","","",""],"posicao":["3","3","3","3","","","","",""]}',
  })
  Recalque: CreateRecalqueDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example: '{"movel":"4","fixo":"3","flutuante":"4","gaveta":"4"}',
  })
  Refrigeracao: CreateRefrigeracaoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"peso_total_cavidade":"55","peso_total_injecao":"122","peso_medio_bruto":"12.2","peso_medio_liquido":"5.5","peso_galho":"67"}',
  })
  Resumo: CreateResumoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_sequenciador":"true","sequenciador":[{"bico":"1","modo":"A","delay":"1.5","open":"1.6"},{"bico":"1","modo":"A","delay":"1.5","open":"1.6"},{"bico":"1","modo":"A","delay":"1.5","open":"1.6"},{"bico":"1","modo":"B","delay":"1.5","open":"1.6"},{"bico":"1","modo":"B","delay":"1.5","open":"1.6"},{"bico":"1","modo":"B","delay":"1.5","open":"1.6"},{"bico":"1","modo":"B","delay":"1.5","open":"1.6"},{"bico":"1","modo":"B","delay":"1.5","open":"1.6"}]}',
  })
  Sequenciador: CreateSequenciadorDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"bico":"1","zona_1":"3","zona_2":"4","zona_3":"3","zona_4":"2","zona_5":"3","zona_6":"4","zona_7":"4"}',
  })
  TemperaturaCilindro: CreateTemperaturaCilindroDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"tempo_fechamento":"12","tempo_injecao":"13","tempo_recalque":"14","tempo_resfriamento":"33","tempo_abertura_molde":"22","tempo_extracao":"33","reciclo_outros":"44"}',
  })
  Tempos: CreateTemposDto;
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  img_produto: any;
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  img_camara: any;
  Comentario: string;
}

type CreateHomologacaoDto = Homologacao;
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
type CreateRefrigeracaoDto = Refrigeracao;
type CreateResumoDto = Resumo;
type CreateSequenciadorDto = Sequenciador;
type CreateTemperaturaCilindroDto = TemperaturaCilindro;
type CreateTemposDto = Tempos;
