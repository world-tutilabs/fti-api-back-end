import {
  AquecedorAgua,
  BicoCamaraQuente,
  Cavidade,
  Cursos,
  Dimensao,
  DispositivoSeguranca,
  Dosador,
  Dosagem,
  Estufagem,
  Homologacao,
  Imagens,
  InfoGeraisRegulagem,
  Injecao,
  NovosTryouts,
  ObservacoesGerais,
  Pressoes,
  ProgramacaoMachos,
  Recalque,
  RefrigeracaoMolde,
  Resumo,
  Sequenciador,
  TemperaturaCilindro,
  TemperaturaProgramada,
  Tempos,
} from '@prisma/client';

export class CreateFtiDto {
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
  AquecedorAgua: Omit<AquecedorAgua, 'id'>;
  BicoCamaraQuente: Omit<BicoCamaraQuente, 'id'>;
  Cavidade: Omit<Cavidade, 'id'>;
  Cursos: Omit<Cursos, 'id'>;
  Dimensao: Omit<Dimensao, 'id'>;
  DispositivoSeguranca: Omit<DispositivoSeguranca, 'id'>;
  Dosador: Omit<Dosador, 'id'>;
  Dosagem: Omit<Dosagem, 'id'>;
  Estufagem: Omit<Estufagem, 'id'>;
  Homologacao: Omit<Homologacao, 'id'>;
  Imagens: Omit<Imagens, 'id'>;
  InfoGeraisRegulagem: Omit<InfoGeraisRegulagem, 'id'>;
  Injecao: Omit<Injecao, 'id'>;
  NovosTryouts: Omit<NovosTryouts, 'id'>;
  ObservacoesGerais: Omit<ObservacoesGerais, 'id'>;
  Pressoes: Omit<Pressoes, 'id'>;
  ProgramacaoMachos: Omit<ProgramacaoMachos, 'id'>;
  Recalque: Omit<Recalque, 'id'>;
  RefrigeracaoMolde: Omit<RefrigeracaoMolde, 'id'>;
  Resumo: Omit<Resumo, 'id'>;
  Sequenciador: Omit<Sequenciador, 'id'>;
  TemperaturaCilindro: Omit<TemperaturaCilindro, 'id'>;
  TemperaturaProgramada: Omit<TemperaturaProgramada, 'id'>;
  Tempos: Omit<Tempos, 'id'>;
}
