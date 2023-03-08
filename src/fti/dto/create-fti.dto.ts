import {Fti, Homologacao} from '@prisma/client';

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
  
}


export class CreateHomologDTO implements Homologacao {
  id: number;
  ftiId: number;
  revisao: number;
}


