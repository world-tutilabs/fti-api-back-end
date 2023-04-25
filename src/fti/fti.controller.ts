import { VersioningParam } from './types/params/versioning';
import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { FtiService } from './fti.service';
import {
  Body,
  Post,
  UploadedFiles,
  Patch,
  HttpCode,
  Req,
  Put,
} from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { multerOptions } from 'src/config/multer.config';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import {
  CreateFtiDto,
  FindByIdParam,
  FindByStatusIdParam,
  FindHistoryParams,
  HomologDto,
} from './types';

@Controller('fti')
@ApiBearerAuth()
@ApiTags('FTI')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Get('list/:id')
  @ApiHeader({ name: 'offset' })
  @ApiHeader({ name: 'limit' })
  @ApiParam({
    name: 'id',
    description: '1: Em aprovação, 2: Homologadas ou 3 para Reprovadas',
  })
  @ApiOperation({
    summary: 'Lista todas as FTIs Em Aprovação, Homologadas ou Reprovadas',
  })
  async listOnApproval(@Param() { id }: FindByStatusIdParam, @Req() data: any) {
    const newData = {
      id,
      offset: data.headers.offset,
      limit: data.headers.limit,
    };
    return await this.ftiService.listAllByStatus(newData);
  }

  @Post('create')
  @ApiOperation({ summary: 'Cria uma nova FTI' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img_produto', maxCount: 1 },
        { name: 'img_camara', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  create(
    @Body() data: CreateFtiDto,
    @UploadedFiles() files: any,
    @Req() user: any,
  ) {
    const newData = Object.assign({}, data, {
      Images: {
        img_produto: files.img_produto ? files.img_produto[0].filename : null,
        img_camara: files.img_camara ? files.img_camara[0].filename : null,
      },
      user: user.user.user,
    });
    return this.ftiService.create(newData);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Procura FTI específica' })
  async findOne(@Param() { id }: FindByIdParam) {
    const result = await this.ftiService.findOne(+id);
    if (!result) throw new NotFoundException(`FTI ${id} Not Found`);

    return result;
  }

  @Put('homologation/:id')
  @ApiOperation({ summary: 'Homologa FTI específica' })
  async homologation(@Req() data: HomologDto) {
    return this.ftiService.homolog(data);
  }

  @Patch('hide/:id')
  @ApiOperation({ summary: `Altera o Status da FTI para 'Versionada'` })
  @HttpCode(204)
  async hideOne(@Param() { id }: FindByIdParam) {
    const result = await this.ftiService.findOne(+id);
    if (!result) throw new NotFoundException(`FTI ${id} Not Found`);

    return this.ftiService.hideOne(+id);
  }

  @Get('/history/:molde')
  @ApiOperation({ summary: `Lista Histórico de FTI do respectivo molde` })
  async history(@Param() { molde }: FindHistoryParams) {
    return await this.ftiService.history(molde);
  }

  @Put('update/:id')
  @ApiOperation({ summary: `Atualiza FTI específica` })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img_produto', maxCount: 1 },
        { name: 'img_camara', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  @ApiConsumes('multipart/form-data')
  async update(
    @Param() { id }: FindByIdParam,
    @Body() data: Partial<CreateFtiDto>,
    @UploadedFiles() files: any,
    @Req() user: any,
  ) {
    const result = await this.ftiService.findOne(+id);
    if (!result) throw new NotFoundException(`id ${id} not found`);

    return this.ftiService.hideOne(+id);
  }
  @Post('versioning/:mold&&:product')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img_produto', maxCount: 1 },
        { name: 'img_camara', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  async versioning(
    @Param() { mold, product }: VersioningParam,
    @Body() data: CreateFtiDto,
    @UploadedFiles() files: any,
    @Req() user: any,
  ) {
    const newData = { mold, product, body: data, files, user };
    await this.ftiService.versioning(newData);
  }
}
