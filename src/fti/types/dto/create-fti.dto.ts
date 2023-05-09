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
  @ApiProperty({ example: 'Argola C/ Preceito' })
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
  @ApiProperty({ example: 'Orient' })
  cliente: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Modelo_teste' })
  modelo: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Maquina_teste' })
  maquina: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'cod_materia_prima & descricao_materia_prima' })
  materia_prima: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'cor_teste' })
  cor: string;
  @IsNotEmpty()
  @ApiProperty({ example: '7' })
  qtd_cavidade: string;
  @ApiHideProperty()
  Homologacao: CreateHomologacaoDto;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  AquecedorAgua: CreateAquecedorAguaDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_bico_camara_quente": "true","check_tipos_temperatura": "k","temperatura_programada": ["1", "2"]}',
  })
  BicoCamaraQuente: CreateBicoCamaraQuenteDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example: '[{"cavidade": 1},{"cavidade": 2},{"cavidade": 3}]',
  })
  Cavidade: CreateCavidadeDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"curso_abertura": "1", "curso_descompressao": "2", "tempo_recalque": "3", "curso_avanco_extrator": "1", "inicio_protecao_molde": "2"}',
  })
  Cursos: CreateCursosDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example: '{"altura": "1", "comprimento": "1," ,"largura": "1"}',
  })
  Dimensao: CreateDimensaoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_dispositivo_seg": "true","sensor": "false", "micro_sw": "true", "fim_curso": "true"}',
  })
  DispositivoSeguranca: CreateDispositivoSeguranca;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_dosador": "true", "velocidade_dosagem": "1", "tempo_dosagem": "2"}',
  })
  Dosador: CreateDosadorDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"velocidade": ["1"], "contrapressao": ["2"], "pressao_de_dosagem": ["1"], "posicao": ["2"], "tempo_real": ["1"]}',
  })
  Dosagem: CreateDosagemDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_estufagem": "true", "temperatura_ini": "1", "temperatura_final": "1", "tempo": "2"}',
  })
  Estufagem: CreateEstufagemDto;
  @ApiHideProperty()
  Images: CreateImagensDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"bucha_injecao": "1", "bico_injecao": "2", "prog_injecao": "1", "modo": "1", "ciclo_total": "2", "producao_horaria": "2"}',
  })
  InfoGeraisRegulagem: CreateInfoGeraisRegulagemDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"injecao_velocidade": ["1","2","3"], "injecao_pressao": ["1", "1", "2"], "injecao_posicao": ["3","4"]}',
  })
  Injecao: CreateInjecaoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"pressao_media": "1", "pressao_travamento": "1", "pressao_avanco": "1", "pressao_recuo": "2", "pressao_descompressao": "2", "peso_galho": "2"}',
  })
  Pressoes: CreatePressoesDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example: '[{"check_programacao_machos":"true","check_posicao":"true","check_tempo":"true","macho":[[{"tempo":{"saida":"456","entrada":""}},{"posicao":{"saida":"645","entrada":"546"}},{"pressao":{"saida":"31","entrada":"321"}},{"velocidade":{"saida":"321","entrada":"468"}}],[{"tempo":{"saida":"213","entrada":"456"}},{"posicao":{"saida":"654","entrada":"64"}},{"pressao":{"saida":"465","entrada":"213"}},{"velocidade":{"saida":"123","entrada":"231"}}],[{"tempo":{"saida":"79","entrada":"3128"}},{"posicao":{"saida":"654","entrada":"8975"}},{"pressao":{"saida":"65","entrada":"654"}},{"velocidade":{"saida":"654","entrada":"654"}}],[{"tempo":{"saida":"465","entrada":"654"}},{"posicao":{"saida":"789","entrada":"654"}},{"pressao":{"saida":"45","entrada":"231"}},{"velocidade":{"saida":"3","entrada":"789"}}]]}]',
  })
  ProgramacaoMachos: CreateProgramacaoMachosDto;
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"velocidade": ["1", "2"], "pressao": ["1", "2"], "tempo": ["1"], "posicao": ["1"]}',
  })
  Recalque: CreateRecalqueDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example: '{"movel": "1", "fixo": "1", "flutuante": "2", "gaveta": "1"}',
  })
  RefrigeracaoMolde: CreateRefrigeracaoMoldeDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"peso_total_cavidade": "1" , "peso_total_injecao": "2", "peso_medio_bruto": "2" , "peso_medio_liquido": "1", "peso_galho": "1", "outros": "outros teste"}',
  })
  Resumo: CreateResumoDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"check_sequenciador": "true", "sequenciador": [{"bico": "1", "open": "1", "modo": "1"}]}',
  })
  Sequenciador: CreateSequenciadorDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"bico": "1", "zona_1": "1", "zona_2": "2", "zona_3": "2", "zona_3": "2", "zona_4": "2", "zona_5": "2", "zona_6": "2", "zona_7": "2"}',
  })
  TemperaturaCilindro: CreateTemperaturaCilindroDto;
  @IsJSON()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '{"tempo_fechamento": "1", "tempo_injecao": "2", "tempo_recalque": "1", "tempo_resfriamento": "2", "tempo_abertura_molde": "3", "tempo_extracao": "1", "tempo_retirada_remocao_peca": "2", "reciclo_outros": "1"}',
  })
  Tempos: CreateTemposDto;
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  img_produto: any;
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  img_camara: any;
  Comentario: string;
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
