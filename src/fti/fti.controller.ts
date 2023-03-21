import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Req
} from '@nestjs/common';
import { FtiService } from './fti.service';
import { CreateFtiDto } from './dto/create-fti.dto';
import { UpdateFtiDto } from './dto/update-fti.dto';
import { Body, Post, Patch, UploadedFiles, Put } from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { multerOptions } from 'src/config/multer.config';
import { ApiTags } from '@nestjs/swagger';
import { HomologDto } from './dto/homolog-fti.dto';
import { ValidateTokenAdminMiddleware } from './middlewares/validate-token-admin.middleware';

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

  @Put('homologation/:id')
  async homologation(@Req() data: HomologDto) {
    return this.ftiService.homolog(data)
  }
}
