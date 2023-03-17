import { FindAllParams } from './types/params/find-all-params';
import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FtiService } from './fti.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/config/multer.config';

@Controller('fti')
@ApiTags('FTI')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Get(':statusId')
  @ApiOperation({
    summary: 'lista todas as FTIs de acordo com o status requerido',
  })
  async findAll(@Param() { statusId }: FindAllParams) {
    return await this.ftiService.findAll(+statusId);
  }

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img_produto', maxCount: 1 },
        { name: 'img_camara_bq', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  async upload(@UploadedFiles() files) {
    return files;
  }
}
