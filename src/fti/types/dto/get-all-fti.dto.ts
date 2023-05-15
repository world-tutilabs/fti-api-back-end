export class getAllFtiDto {
  id: number;
  cod_molde: string;
  cliente: string;
  produto: string;
  cod_produto: string;
  createdAt: Date;
  modelo: string;
  maquina: string;
  materia_prima: string;
  desc_materia_prima: string;
  cor: string;
  Homologacao: {
    revisao: number;
    homologacao: any;
    Status: {
      descricao: string;
    };
  }[];
}
