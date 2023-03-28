import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FtiService } from './fti.service';
import {
  Body,
  Post,
  UploadedFiles,
  Put,
  Patch,
  HttpCode,
  Req,
} from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { multerOptions } from 'src/config/multer.config';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import {
  CreateFtiDto,
  FindByIdParam,
  FindByStatusIdParam,
  FindHistoryParams,
} from './types';

@Controller('fti')
@ApiBearerAuth()
@ApiTags('FTI')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Get('list/:id')
  async listOnApproval(@Param() { id }: FindByStatusIdParam) {
    return await this.ftiService.listAllByStatus(+id);
  }

  @Post('create')
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
        img_produto: files.img_produto[0].filename,
        img_camara: files.img_camara[0].filename,
      },
      user: user.user.user,
    });
    return this.ftiService.create(newData);
  }

  @Get('find/:id')
  async findOne(@Param() { id }: FindByIdParam) {
    const result = await this.ftiService.findOne(+id);

    if (!result) throw new NotFoundException(`FTI ${id} Not Found`);

    return result;
  }

  @Put('homologation/:id')
  async homologation(@Param() { id }: FindByIdParam, @Req() user: any) {
    return this.ftiService.homolog(+id, user.user);
  }

  @Patch('hide/:id')
  @HttpCode(204)
  async hideOne(@Param() { id }: FindByIdParam) {
    const result = await this.ftiService.findOne(+id);
    if (!result) throw new NotFoundException(`id ${id} not found`);

    return this.ftiService.hideOne(+id);
  }

  @Get('/history/:molde')
  async history(@Param() { molde }: FindHistoryParams) {
    return await this.ftiService.history(molde);
  }
}
