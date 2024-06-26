import { PrismaService } from '../prisma/prisma.service';
import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Fti } from '@prisma/client';
import { FtiRepository } from './repository/fti-repository';
import { CreateFtiDto, HomologDto, UpdateFtiDto } from './types';
import { MailerService } from '@nestjs-modules/mailer/dist/mailer.service';
import * as fs from 'fs';
import { VersioningDto } from './types/dto/versioning.dto';
import { ReqUserDto } from './types/dto/req-user-fti.dto';

@Injectable()
export class FtiService implements FtiRepository {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async listAllByStatus(data: any): Promise<Partial<Fti>[]> {
    const { id, limit, offset } = data;
    const isEqualThree =
      +id === 3 ? [{ statusId: 3 }, { statusId: 6 }] : [{ statusId: +id }];

    return await this.prisma.fti.findMany({
      take: +limit,
      skip: +offset,
      where: {
        Homologacao: {
          some: {
            OR: isEqualThree,
          },
        },
      },
      select: {
        id: true,
        cod_molde: true,
        cliente: true,
        produto: true,
        cod_produto: true,
        updatedAt: true,
        createdAt: true,
        modelo: true,
        materia_prima: true,
        maquina: true,
        desc_materia_prima: true,
        cor: true,
        Homologacao: {
          select: {
            revisao: true,
            user_created: true,
            user_homologation: true,
            Status: {
              select: { descricao: true },
            },
          },
        },
      },
    });
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
        desc_materia_prima: true,
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
        BicoCamaraQuente: {
          select: {
            check_bico_camara_quente: true,
            temperatura_programada: true,
            check_tipos_temperatura: true,
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
            curso_avanco_extrator: true,
            inicio_protecao_molde: true,
          },
        },
        Dimensao: {
          select: {
            altura: true,
            comprimento: true,
            largura: true,
          },
        },
        DispositivoSeguranca: {
          select: {
            sensor: true,
            micro_sw: true,
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
            pressao_avanco_1: true,
            pressao_avanco_2: true,
            pressao_recuo_1: true,
            pressao_recuo_2: true,
            pressao_descompressao: true,
            vel_recuo_extrator_1: true,
            vel_recuo_extrator_2: true,
            vel_avanco_extrador_1: true,
            vel_avanco_extrador_2: true,
            pressao_descomp_traseira: true,
            pressao_descomp_dianteira: true,
            vel_descomp_traseira: true,
            vel_descomp_dianteira: true,
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
        Refrigeracao: {
          select: {
            refrigeracao: true,
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
            reciclo_outros: true,
          },
        },
      },
    });
  }

  async history(id: number): Promise<Partial<Fti>[]> {
    const fti = await this.prisma.fti.findFirst({
      where: { id },
      include: { Homologacao: true },
    });

    return await this.prisma.fti.findMany({
      where: {
        AND: [
          { cod_molde: fti.cod_molde },
          { cod_produto: fti.cod_produto },
          { maquina: fti.maquina },
          { Homologacao: { every: { statusId: 4 } } },
        ],
      },

      select: {
        id: true,
        cod_molde: true,
        produto: true,
        updatedAt: true,
        maquina: true,
        Homologacao: {
          select: {
            revisao: true,
          },
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
      desc_materia_prima,
      cor,
      qtd_cavidade,
      Dimensao,
      Estufagem,
      DispositivoSeguranca,
      Refrigeracao,
      Cavidade,
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
      Comentario,
    } = data;

    const newFti = await this.prisma.fti.create({
      data: {
        cliente,
        cod_molde,
        cod_produto,
        cor,
        maquina,
        materia_prima,
        desc_materia_prima,
        modelo,
        produto,
        qtd_cavidade: qtd_cavidade,
        Homologacao: {
          create: {
            user_created: { user, Comentario },
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
        Refrigeracao: {
          createMany: {
            data: {
              refrigeracao: JSON.parse(Refrigeracao as any),
            },
          },
        },
        Cavidade: {
          createMany: {
            data: JSON.parse(Cavidade as any),
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
      include: {
        BicoCamaraQuente: true,
        Cavidade: true,
        Cursos: true,
        Dimensao: true,
        DispositivoSeguranca: true,
        Dosador: true,
        Dosagem: true,
        Estufagem: true,
        Homologacao: true,
        Imagens: true,
        InfoGeraisRegulagem: true,
        Injecao: true,
        Pressoes: true,
        ProgramacaoMachos: true,
        Recalque: true,
        Refrigeracao: true,
        Resumo: true,
        Sequenciador: true,
        TemperaturaCilindro: true,
        Tempos: true,
      },
    });

    // this.sendEmail(newFti);

    return newFti;
  }

  async homolog(
    id: number,
    { user }: ReqUserDto,
    { Comentario, status }: HomologDto,
  ): Promise<void> {
    const fti = await this.prisma.fti.findFirst({
      where: { id },
      select: {
        id: true,
        cod_molde: true,
        cod_produto: true,
        maquina: true,
        Homologacao: { select: { id: true, revisao: true, statusId: true } },
      },
    });

    if (!(fti?.Homologacao[0]?.statusId === 1)) {
      throw new BadRequestException(
        `Fti id: ${id} is not on Approval process!`,
      );
    }

    const activeFti = await this.prisma.fti.findFirst({
      include: {
        Homologacao: true,
      },
      orderBy: {
        id: 'desc',
      },
      where: {
        AND: {
          cod_molde: fti.cod_molde,
          cod_produto: fti.cod_produto,
          maquina: fti.maquina,
          Homologacao: {
            some: {
              statusId: 2,
            },
          },
        },
      },
      take: 1,
    });

    const newMachine =
      fti?.maquina?.replace(/\s/g, '') ===
      activeFti?.maquina?.replace(/\s/g, '');

    if (
      fti?.Homologacao[0]?.revisao !== 0 &&
      status === 2 &&
      activeFti &&
      newMachine
    ) {
      await this.prisma.fti.update({
        where: { id: activeFti.id },
        data: {
          Homologacao: {
            update: {
              where: {
                id: activeFti.Homologacao[0].id,
              },
              data: {
                statusId: 4,
              },
            },
          },
        },
      });
    }

    const brandNewFti = await this.prisma.fti
      .findFirst({
        where: {
          AND: [
            { cod_molde: fti.cod_molde },
            { cod_produto: fti.cod_produto },
            { Homologacao: { some: { statusId: { equals: 2 } } } },
          ],
        },
      })
      .then((fti) => {
        return fti === null;
      });

    // aprova ou reprova de acordo com o status
    await this.prisma.homologacao.updateMany({
      data: {
        user_homologation: { user: user.user, Comentario },
        statusId:
          brandNewFti &&
          fti.Homologacao[0].revisao === 0 &&
          !activeFti &&
          status === 3
            ? 6
            : status,
      },
      where: {
        ftiId: +id,
      },
    });
  }

  async update(id: number, data: UpdateFtiDto, files: any, user: any) {
    const fti = await this.prisma.fti.findFirst({
      where: { id },
      select: {
        Homologacao: { select: { revisao: true, id: true, statusId: true } },
        Imagens: {
          select: { id: true },
        },
      },
    });

    if (fti.Homologacao[0].statusId !== 3 && fti.Homologacao[0].statusId !== 6)
      throw new BadRequestException(`Fti id: ${id} is not Reproved!`);

    if (files.img_produto) {
      const imgProduto = await this.prisma.imagens.findFirst({
        where: {
          ftiId: id,
        },
        select: {
          img_produto: true,
        },
      });

      fs.unlink(
        process.cwd() + '/dist/uploads/' + imgProduto.img_produto,
        function (err) {
          if (err) throw err;
          console.log('File deleted!');
        },
      );

      await this.prisma.fti.update({
        where: {
          id: id,
        },
        data: {
          Imagens: {
            update: {
              where: { id: fti.Imagens[0].id },
              data: {
                img_produto: files.img_produto[0].filename,
              },
            },
          },
        },
      });
    }

    if (files.img_camara) {
      const imgCamara = await this.prisma.imagens.findFirst({
        where: {
          ftiId: id,
        },
        select: { img_camara: true },
      });

      fs.unlink(
        process.cwd() + '/dist/uploads/' + imgCamara.img_camara,
        function (err) {
          if (err) throw err;
          console.log('File deleted!');
        },
      );

      await this.prisma.fti.update({
        where: {
          id: id,
        },
        data: {
          Imagens: {
            update: {
              where: { id: fti.Imagens[0].id },
              data: {
                img_camara: files.img_camara[0].filename,
              },
            },
          },
        },
      });
    }

    return await this.prisma.fti.update({
      where: { id },
      data: {
        produto: data.produto,
        cod_produto: data.cod_produto,
        cod_molde: data.cod_molde,
        cliente: data.cliente,
        modelo: data.modelo,
        maquina: data.maquina,
        materia_prima: data.materia_prima,
        desc_materia_prima: data.desc_materia_prima,
        cor: data.cor,
        qtd_cavidade: data.qtd_cavidade,
        updatedAt: new Date(),
        BicoCamaraQuente: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.BicoCamaraQuente as any),
          },
        },
        Cavidade: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Cavidade as any),
          },
        },
        Cursos: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Cursos as any),
          },
        },
        Dimensao: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Dimensao as any),
          },
        },
        DispositivoSeguranca: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.DispositivoSeguranca as any),
          },
        },
        Dosador: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Dosador as any),
          },
        },
        Dosagem: {
          deleteMany: {},
          create: {
            dosagem: data.Dosagem,
          },
        },
        Estufagem: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Estufagem as any),
          },
        },
        Homologacao: {
          update: {
            where: {
              id: fti.Homologacao[0].id,
            },
            data: {
              user_created: { user, Comentario: data.Comentario },
              statusId: 1,
              revisao: fti?.Homologacao[0]?.revisao === 0 ? 0 : undefined,
            },
          },
        },
        InfoGeraisRegulagem: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.InfoGeraisRegulagem as any),
          },
        },
        Injecao: {
          deleteMany: {},
          createMany: {
            data: { injecao: data.Injecao },
          },
        },
        Pressoes: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Pressoes as any),
          },
        },
        ProgramacaoMachos: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.ProgramacaoMachos as any),
          },
        },
        Recalque: {
          deleteMany: {},
          create: {
            recalque: data.Recalque,
          },
        },
        Refrigeracao: {
          deleteMany: {},
          createMany: {
            data: {
              refrigeracao: JSON.parse(data.Refrigeracao as any),
            },
          },
        },
        Resumo: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Resumo as any),
          },
        },
        Sequenciador: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Sequenciador as any),
          },
        },
        TemperaturaCilindro: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.TemperaturaCilindro as any),
          },
        },
        Tempos: {
          deleteMany: {},
          createMany: {
            data: JSON.parse(data.Tempos as any),
          },
        },
      },
    });
  }

  async versioning({ id, body, files, user }: VersioningDto): Promise<void> {
    const {
      produto,
      cod_produto,
      cod_molde,
      cliente,
      modelo,
      maquina,
      materia_prima,
      desc_materia_prima,
      cor,
      qtd_cavidade,
      Dimensao,
      Estufagem,
      DispositivoSeguranca,
      Refrigeracao,
      Cavidade,
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
      Comentario,
    } = body;
    const images = {
      img_produto: files.img_produto
        ? files.img_produto[0].filename
        : body.img_produto,
      img_camara: files.img_camara
        ? files.img_camara[0].filename
        : body.img_camara,
    };

    const fti = await this.prisma.fti.findFirst({
      where: { id },
      include: { Homologacao: true },
    });

    if (!fti) {
      throw new HttpException(`FTI not found`, HttpStatus.BAD_REQUEST);
    }

    if (fti.Homologacao[0].statusId !== 2) {
      throw new HttpException(`FTI is not Homologated`, HttpStatus.BAD_REQUEST);
    }

    await this.prisma.fti.create({
      data: {
        cliente,
        cod_molde,
        cod_produto,
        cor,
        maquina,
        materia_prima,
        desc_materia_prima,
        modelo,
        produto,
        qtd_cavidade: qtd_cavidade,
        Homologacao: {
          create: {
            user_created: { user: user.user.user, Comentario: Comentario },
            statusId: 1,
            revisao:
              fti.maquina.replace(/\s/g, '') === body.maquina.replace(/\s/g, '')
                ? fti.Homologacao[0].revisao + 1
                : 0,
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
        Refrigeracao: {
          createMany: {
            data: { refrigeracao: JSON.parse(Refrigeracao as any) },
          },
        },
        Cavidade: {
          createMany: {
            data: JSON.parse(Cavidade as any),
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

  async cancelOne(id: number): Promise<Partial<Fti>> {
    const fti = await this.prisma.fti.findFirst({
      where: { id },
      select: {
        id: true,
        Homologacao: { select: { id: true, statusId: true, revisao: true } },
      },
    });

    if (fti.Homologacao[0].statusId !== 3)
      throw new BadRequestException(`Fti id: ${id} cannot be canceled`);

    return await this.prisma.fti.update({
      where: { id: fti.id },
      data: {
        Homologacao: {
          update: {
            where: {
              id: fti.Homologacao[0].id,
            },
            data: {
              statusId: 5,
            },
          },
        },
      },
    });
  }

  async sendEmail(fti: any) {
    fti.updatedAt = fti.updatedAt.toLocaleDateString('pt-BR');

    const emailEng = [
      // 'Joseilton.rocha@tutiplast.com.br',
      // 'Onofre.ribeiro@tutiplast.com.br',
    ];

    try {
      await this.mailerService.sendMail({
        to: emailEng,
        subject: `FTI ${fti.id} aguardando homologação`,
        template: './template.pug',
        context: {
          data: fti,
        },
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending message', error);
    }
  }
}
