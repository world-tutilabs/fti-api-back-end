import { FindAllParams } from './types/params/find-all-params';
import {
  Controller,
  Get,
  Param,
  UseInterceptors
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FtiService } from './fti.service';
import { CreateFtiDto } from './dto/create-fti.dto';
import { UpdateFtiDto } from './dto/update-fti.dto';
import { ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Body, Post, UploadedFile, Patch, UploadedFiles } from '@nestjs/common/decorators';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { multerOptions } from 'src/config/multer.config';

@Controller('fti')
@ApiTags('FTI')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Post('/create')
  @UseInterceptors(FileFieldsInterceptor(
    [
      { name: 'img_produto', maxCount: 1 },
      { name: 'img_camara', maxCount: 1 },
    ],
    multerOptions,
  ),)
  create(@Body() data: CreateFtiDto , @UploadedFiles() files: any) {
    const newData = Object.assign({}, data,{Images: {img_produto: files.img_produto[0].filename, img_camara: files.img_camara[0].filename}})
   return this.ftiService.create(newData)
  }

  // @Get('em-aprovacao')
  // findAllEmAprovacao() {
  //   return this.ftiService.findAllEmAprovacao();
  // }

  // @Get('homologadas')
  // findAllHomologadas() {
  //   return this.ftiService.findAllHomologadas();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ftiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFtiDto: UpdateFtiDto) {
    return this.ftiService.update(+id, updateFtiDto);
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
