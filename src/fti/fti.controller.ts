import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Req,
  NotFoundException
} from '@nestjs/common';
import { FtiService } from './fti.service';
import { Body, Post, Patch, UploadedFiles, Put } from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { multerOptions } from 'src/config/multer.config';
import { ApiTags } from '@nestjs/swagger';
import { HomologDto } from './types/dto/homolog-fti.dto';
import { CreateFtiDto } from './types/dto/create-fti.dto';
import { FindByIdParam } from './types/params/find-by-id';

@Controller('fti')
@ApiTags('FTI')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Post('/create')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img_produto', maxCount: 1 },
        { name: 'img_camara', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  create(@Body() data: CreateFtiDto, @UploadedFiles() files: any) {
    const newData = Object.assign({}, data, {
      Images: {
        img_produto: files.img_produto[0].filename,
        img_camara: files.img_camara[0].filename,
      },
    });
    return this.ftiService.create(newData);
  }

  @Get(':id')
  async findOne(@Param() { id }: FindByIdParam) {
    const result = await this.ftiService.findOne(+id);
    if (!result) throw new NotFoundException(`FTI ${id} Not Found`);

    return result;
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

  @Put('homologation/:id')
  async homologation(@Req() data: HomologDto) {
    return this.ftiService.homolog(data)
  }
}
