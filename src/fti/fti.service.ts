// import { Fti } from './entities/fti.entity';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateFtiDto } from './dto/create-fti.dto';
import { UpdateFtiDto } from './dto/update-fti.dto';
import { Fti } from '@prisma/client';


@Injectable()
export class FtiService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFtiDto): Promise<Fti> {
    const {
      produto,
      cod_produto,
      cod_molde,
      cliente,
      modelo,
      maquina,
      materia_prima,
      pigmento,
      cor,
      qtd_cavidade,
      Dimensao,
      Estufagem,
      DispositivoSeguranca,
      RefrigeracaoMolde,
      Cavidade,
      AquecedorAgua,
      Resumo,
      InfoGeraisRegulagem,
      Tempos,
      Pressoes,
      Cursos,
      TemperaturaCilindro,
      Dosador,
      Injecao,
      Recalque,
      Dosagem,
      ProgramacaoMachos,
      BicoCamaraQuente,
      Sequenciador
    } = data;
    const teste = JSON.parse(ProgramacaoMachos as any)
    console.log(teste.macho)
    const result = await this.prisma.fti.create({
      data: {
        cliente,
        cod_molde,
        cod_produto,
        cor,
        maquina,
        materia_prima,
        modelo,
        pigmento,
        produto,
        qtd_cavidade: Number(qtd_cavidade),
        Homologacao: {
          create: {
            user_created: {body:'luan maromba puxa 25 kg'},
            user_homologation: '',
            statusId: 1,
            revisao: 0,
            
          }
        },
        Dimensao: {
          createMany: {
            data: JSON.parse(Dimensao as any)
          }
        },
        Estufagem: {
          createMany: {
            data: JSON.parse(Estufagem as any)
          }
        },
        DispositivoSeguranca: {
          createMany: {
            data: JSON.parse(DispositivoSeguranca as any)
          }
        },
        RefrigeracaoMolde: {
          createMany: {
            data: JSON.parse(RefrigeracaoMolde as any)
          }
        },
        Cavidade: {
          createMany: {
            data: JSON.parse(Cavidade as any)
          }
        },
        AquecedorAgua: {
          create: {
            check_aquecedor: AquecedorAgua as any
          }
        },
        Resumo: {
          createMany: {
            data: JSON.parse(Resumo as any)
          }
        },
        InfoGeraisRegulagem: {
          createMany: {
            data: JSON.parse(InfoGeraisRegulagem as any)
          }
        },
        Tempos: {
          createMany: {
            data: JSON.parse(Tempos as any)
          }
        },
        Pressoes: {
          createMany: {
            data: JSON.parse(Pressoes as any)
          }
        },
        Cursos: {
          createMany: {
            data: JSON.parse(Cursos as any)
          }  
        },
        TemperaturaCilindro: {
          createMany: {
            data: JSON.parse(TemperaturaCilindro as any)
          }
        },
        Dosador: {
          createMany: {
            data: JSON.parse(Dosador as any)
          }
        },
        Injecao: {
          createMany: {
            data: {
              injecao: Injecao
            }
          }
        },
        Recalque: {
          create: {
            recalque: Recalque
          }
        },
        Dosagem: {
         create: {
          dosagem: Dosagem
         }
        },
        ProgramacaoMachos: {
          createMany: {
            data: JSON.parse(ProgramacaoMachos as any)
          }
        },
        BicoCamaraQuente: {
          createMany: {
            data: JSON.parse(BicoCamaraQuente as any)
          }
        },
        Sequenciador: {
          createMany: {
            data: JSON.parse(Sequenciador as any)
          }
        }
      }
    })
    console.log(result)
    // const teste = JSON.parse(Dimensao as any)
    // console.log(teste.altura)
    // return await this.prisma.fti.create({
    //   data: {
    //     cliente: data.cliente,
    //     produto: data.produto,
    //     cod_produto: data.cod_molde,
    //     modelo: data.modelo,
    //     maquina: data.maquina,
    //     materia_prima: data.materia_prima,
    //     cor: data.cor,
    //     pigmento: data.pigmento,
    //     cod_molde: data.cod_molde,
    //     Dimensao: {
    //       createMany: {
    //         data: JSON.parse(Dimensao as any)
    //       }
    //     }
    //   },
    // });
    return null
  }

  // async findAllEmAprovacao(): Promise<getAllFtiDto[]> {
  //   return await this.prisma.fti.findMany({
  //     where: { Homologacao: { every: { statusId: 1 } } },
  //     select: {
  //       id: true,
  //       cod_molde: true,
  //       cliente: true,
  //       produto: true,
  //       cod_produto: true,
  //       createdAt: true,
  //       modelo: true,
  //       maquina: true,
  //       materia_prima: true,
  //       cor: true,
  //       pigmento: true,
  //       Homologacao: {
  //         select: {
  //           revisao: true,
  //           Status: { select: { descricao: true } },
  //           Avaliacao: {
  //             select: {
  //               nome: true,
  //               Cargo: { select: { descricao: true } },
  //               aprovado: true,
  //               createdAt: true,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });
  // }

  // async findAllHomologadas(): Promise<getAllFtiDto[]> {
  //   return await this.prisma.fti.findMany({
  //     where: { Homologacao: { every: { statusId: 2 } } },
  //     select: {
  //       id: true,
  //       cod_molde: true,
  //       cliente: true,
  //       produto: true,
  //       cod_produto: true,
  //       createdAt: true,
  //       modelo: true,
  //       maquina: true,
  //       materia_prima: true,
  //       cor: true,
  //       pigmento: true,
  //       Homologacao: {
  //         select: {
  //           revisao: true,
  //           Status: { select: { descricao: true } },
  //           Avaliacao: {
  //             select: {
  //               nome: true,
  //               Cargo: { select: { descricao: true } },
  //               aprovado: true,
  //               createdAt: true,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });
  // }

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
