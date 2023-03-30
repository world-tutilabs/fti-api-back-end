import { PrismaService } from '../prisma/prisma.service';
import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { Fti } from '@prisma/client';
import { FtiRepository } from './repository/fti-repository';
import { getAllFtiDto } from './types/dto/get-all-fti.dto';
import { CreateFtiDto } from './types/dto/create-fti.dto';
import { HomologDto } from './types/dto/homolog-fti.dto';
import { VersioningParam } from './types/params/versioning';

@Injectable()
export class FtiService implements FtiRepository {
  constructor(private prisma: PrismaService) {}
  async versioning(data: VersioningParam): Promise<void> {
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
      Sequenciador,
    } = data.body;  
    const images = {
      img_produto: data.files.img_produto ? data.files.img_produto[0].filename : data.body.img_produto,
      img_camara: data.files.img_camara ? data.files.img_camara[0].filename : data.body.img_camara,
    }
    const findByFtiPresent = await this.prisma.fti.findFirst({
      include: {
        Homologacao: true
      },
      orderBy: {
        id: 'desc'
      },
      take: 1,
      where: {
      AND: {
        cod_molde: data.mold,
        cod_produto: data.product
      }
      }
    })
    if(!findByFtiPresent) {
      throw new HttpException(`insistent fti`, HttpStatus.BAD_REQUEST);
    }
    if(findByFtiPresent.Homologacao[0].statusId === 1) {
      throw new HttpException(`Fti in approval process`, HttpStatus.BAD_REQUEST);
    }
  
    await this.prisma.homologacao.update({
      data: {
        statusId: 4
      },
      where: {
        id: findByFtiPresent.id
      }
    })
    await this.prisma.fti.create({
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
        qtd_cavidade: qtd_cavidade,
        Homologacao: {
          create: {
            user_created: data.user.user.user,
            statusId: 1,
            revisao: findByFtiPresent.Homologacao[0].revisao + 1,
          },
        },
        Dimensao: {
          createMany: {
            data: JSON.parse(Dimensao as any),
          },
        },
        Estufagem: {
          createMany: {
            data: JSON.parse(Estufagem as any),
          },
        },
        DispositivoSeguranca: {
          createMany: {
            data: JSON.parse(DispositivoSeguranca as any),
          },
        },
        RefrigeracaoMolde: {
          createMany: {
            data: JSON.parse(RefrigeracaoMolde as any),
          },
        },
        Cavidade: {
          createMany: {
            data: JSON.parse(Cavidade as any),
          },
        },
        AquecedorAgua: {
          create: {
            check_aquecedor: AquecedorAgua as any,
          },
        },
        Resumo: {
          createMany: {
            data: JSON.parse(Resumo as any),
          },
        },
        InfoGeraisRegulagem: {
          createMany: {
            data: JSON.parse(InfoGeraisRegulagem as any),
          },
        },
        Tempos: {
          createMany: {
            data: JSON.parse(Tempos as any),
          },
        },
        Pressoes: {
          createMany: {
            data: JSON.parse(Pressoes as any),
          },
        },
        Cursos: {
          createMany: {
            data: JSON.parse(Cursos as any),
          },
        },
        TemperaturaCilindro: {
          createMany: {
            data: JSON.parse(TemperaturaCilindro as any),
          },
        },
        Dosador: {
          createMany: {
            data: JSON.parse(Dosador as any),
          },
        },
        Injecao: {
          createMany: {
            data: {
              injecao: Injecao,
            },
          },
        },
        Recalque: {
          create: {
            recalque: Recalque,
          },
        },
        Dosagem: {
          create: {
            dosagem: Dosagem,
          },
        },
        ProgramacaoMachos: {
          createMany: {
            data: JSON.parse(ProgramacaoMachos as any),
          },
        },
        BicoCamaraQuente: {
          createMany: {
            data: JSON.parse(BicoCamaraQuente as any),
          },
        },
        Sequenciador: {
          createMany: {
            data: JSON.parse(Sequenciador as any),
          },
        },
        Imagens: {
          createMany: {
            data: images,
          },
        },
      },
    });
  }
  async homolog(data: HomologDto): Promise<void> {
    await this.prisma.homologacao.updateMany({
      data: {
        user_homologation: data.user,
        statusId: Number(data.body.status)
      },
      where: {
        ftiId: Number(data.params.id)
      }
    })
  }
  findAll(statusId: number): Promise<getAllFtiDto[]> {
    throw new Error('Method not implemented.');
  }

  async listAllByStatus(statusId: number): Promise<Partial<Fti[]>> {
    return await this.prisma.fti.findMany({
      where: {
        Homologacao: {
          every: { statusId },
        },
      },
    });
  }

  async create(data: CreateFtiDto): Promise<Fti> {
    const {
      user,
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
      Sequenciador,
      Images,
    } = data;
    const resp = await this.prisma.fti.create({
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
        qtd_cavidade: qtd_cavidade,
        Homologacao: {
          create: {
            user_created: user,
            statusId: 1,
            revisao: 0,
          },
        },
        Dimensao: {
          createMany: {
            data: JSON.parse(Dimensao as any),
          },
        },
        Estufagem: {
          createMany: {
            data: JSON.parse(Estufagem as any),
          },
        },
        DispositivoSeguranca: {
          createMany: {
            data: JSON.parse(DispositivoSeguranca as any),
          },
        },
        RefrigeracaoMolde: {
          createMany: {
            data: JSON.parse(RefrigeracaoMolde as any),
          },
        },
        Cavidade: {
          createMany: {
            data: JSON.parse(Cavidade as any),
          },
        },
        AquecedorAgua: {
          create: {
            check_aquecedor: AquecedorAgua as any,
          },
        },
        Resumo: {
          createMany: {
            data: JSON.parse(Resumo as any),
          },
        },
        InfoGeraisRegulagem: {
          createMany: {
            data: JSON.parse(InfoGeraisRegulagem as any),
          },
        },
        Tempos: {
          createMany: {
            data: JSON.parse(Tempos as any),
          },
        },
        Pressoes: {
          createMany: {
            data: JSON.parse(Pressoes as any),
          },
        },
        Cursos: {
          createMany: {
            data: JSON.parse(Cursos as any),
          },
        },
        TemperaturaCilindro: {
          createMany: {
            data: JSON.parse(TemperaturaCilindro as any),
          },
        },
        Dosador: {
          createMany: {
            data: JSON.parse(Dosador as any),
          },
        },
        Injecao: {
          createMany: {
            data: {
              injecao: Injecao,
            },
          },
        },
        Recalque: {
          create: {
            recalque: Recalque,
          },
        },
        Dosagem: {
          create: {
            dosagem: Dosagem,
          },
        },
        ProgramacaoMachos: {
          createMany: {
            data: JSON.parse(ProgramacaoMachos as any),
          },
        },
        BicoCamaraQuente: {
          createMany: {
            data: JSON.parse(BicoCamaraQuente as any),
          },
        },
        Sequenciador: {
          createMany: {
            data: JSON.parse(Sequenciador as any),
          },
        },
        Imagens: {
          createMany: {
            data: Images ? Images : null,
          },
        },
      },
    })
    console.log(resp)
    return null
  }

  async findOne(id: number): Promise<Partial<Fti>> {
    return await this.prisma.fti.findFirst({
      where: { id },
      select: {
        id: true,
        produto: true,
        cod_produto: true,
        cod_molde: true,
        cliente: true,
        modelo: true,
        maquina: true,
        materia_prima: true,
        pigmento: true,
        cor: true,
        qtd_cavidade: true,
        createdAt: true,
        updatedAt: true,
        Homologacao: {
          select: {
            revisao: true,
            user_created: true,
            user_homologation: true,
            Status: {
              select: {
                descricao: true,
              },
            },
          },
        },
        AquecedorAgua: {
          select: {
            check_aquecedor: true,
          },
        },
        BicoCamaraQuente: {
          select: {
            check_bico_camara_quente: true,
            temperatura_programada: true,
          },
        },
        Cavidade: {
          select: {
            cavidade: true,
          },
        },
        Cursos: {
          select: {
            curso_abertura: true,
            curso_descompressao: true,
            tempo_recalque: true,
            curso_avanco_extrator: true,
            inicio_protecao_molde: true,
          },
        },
        Dimensao: {
          select: {
            altura: true,
            comprimento: true,
            largura: true,
            produto: true,
          },
        },
        DispositivoSeguranca: {
          select: {
            check_dispositivo_seg: true,
            sensor: true,
            micro_sw: true,
            fim_curso: true,
          },
        },
        Dosador: {
          select: {
            check_dosador: true,
            velocidade_dosagem: true,
            tempo_dosagem: true,
          },
        },
        Dosagem: {
          select: {
            dosagem: true,
          },
        },
        Estufagem: {
          select: {
            check_estufagem: true,
            temperatura_ini: true,
            temperatura_final: true,
            tempo: true,
          },
        },
        Imagens: {
          select: {
            img_produto: true,
            img_camara: true,
          },
        },
        InfoGeraisRegulagem: {
          select: {
            bucha_injecao: true,
            bico_injecao: true,
            prog_injecao: true,
            modo: true,
            ciclo_total: true,
            producao_horaria: true,
          },
        },
        Injecao: {
          select: {
            injecao: true,
          },
        },
        Pressoes: {
          select: {
            pressao_media: true,
            pressao_travamento: true,
            pressao_avanco: true,
            pressao_recuo: true,
            pressao_descompressao: true,
            peso_galho: true,
          },
        },
        ProgramacaoMachos: {
          select: {
            check_programacao_machos: true,
            macho: true,
          },
        },
        Recalque: {
          select: {
            recalque: true,
          },
        },
        RefrigeracaoMolde: {
          select: {
            movel: true,
            flutuante: true,
            fixo: true,
            gaveta: true,
          },
        },
        Resumo: {
          select: {
            peso_total_cavidade: true,
            peso_total_injecao: true,
            peso_medio_bruto: true,
            peso_medio_liquido: true,
            peso_galho: true,
          },
        },
        Sequenciador: {
          select: {
            check_sequenciador: true,
            sequenciador: true,
          },
        },
        TemperaturaCilindro: {
          select: {
            bico: true,
            zona_1: true,
            zona_2: true,
            zona_3: true,
            zona_4: true,
            zona_5: true,
            zona_6: true,
            zona_7: true,
          },
        },
        Tempos: {
          select: {
            tempo_fechamento: true,
            tempo_injecao: true,
            tempo_recalque: true,
            tempo_resfriamento: true,
            tempo_abertura_molde: true,
            tempo_extracao: true,
            tempo_retirada_remocao_peca: true,
            reciclo_outros: true,
          },
        },
      },
    });
  }

  async hideOne(id: number): Promise<Partial<Fti>> {
    return await this.prisma.homologacao.update({
      where: { id },
      data: {
        statusId: 3,
      },
    });
  }
}
