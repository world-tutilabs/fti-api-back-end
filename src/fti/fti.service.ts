// import { Fti } from './entities/fti.entity';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
// import { CreateFtiDto } from './dto/create-fti.dto';
import { UpdateFtiDto } from './dto/update-fti.dto';
import { getAllFtiDto } from './dto/get-all-fti.dto';

@Injectable()
export class FtiService {
  constructor(private prisma: PrismaService) {}

  // async create(data: CreateFtiDto): Promise<Fti> {
  //   return await this.prisma.fti.create({
  //     data: {
  //       cliente: data.cliente,
  //       produto: data.produto,
  //       cod_produto: data.cod_molde,
  //       modelo: data.modelo,
  //       maquina: data.maquina,
  //       materia_prima: data.materia_prima,
  //       cor: data.cor,
  //       pigmento: data.pigmento,
  //       cod_molde: data.cod_molde,
  //       AquecedorAgua: {
  //         create: {
  //           check_aquecedor: data.AquecedorAgua.check_aquecedor,
  //         },
  //       },
  //     },
  //   });
  // }

  async findAllEmAprovacao(): Promise<getAllFtiDto[]> {
    return await this.prisma.fti.findMany({
      where: { Homologacao: { every: { statusId: 1 } } },
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
            Status: { select: { descricao: true } },
            Avaliacao: {
              select: {
                nome: true,
                Cargo: { select: { descricao: true } },
                aprovado: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });
  }

  async findAllHomologadas(): Promise<getAllFtiDto[]> {
    return await this.prisma.fti.findMany({
      where: { Homologacao: { every: { statusId: 2 } } },
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
            Status: { select: { descricao: true } },
            Avaliacao: {
              select: {
                nome: true,
                Cargo: { select: { descricao: true } },
                aprovado: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} fti`;
  }

  update(id: number, updateFtiDto: UpdateFtiDto) {
    return `This action updates a #${id} fti`;
  }

  remove(id: number) {
    return `This action removes a #${id} fti`;
  }
}
