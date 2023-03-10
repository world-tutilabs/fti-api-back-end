import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { getAllFtiDto } from './dto/get-all-fti.dto';
import { FtiRepository } from './repository/fti-repository';

@Injectable()
export class FtiService implements FtiRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(statusId: number): Promise<getAllFtiDto[] | null> {
    return await this.prisma.fti.findMany({
      where: { Homologacao: { every: { statusId: statusId } } },
      select: {
        id: true,
        cod_molde: true,
        cliente: true,
        produto: true,
        cod_produto: true,
        createdAt: true,
        modelo: true,
        maquina: true,
        materia_prima: true,
        cor: true,
        pigmento: true,
        Homologacao: {
          select: {
            revisao: true,
            homologacao: true,
            Status: { select: { descricao: true } },
          },
        },
      },
    });
  }
}
