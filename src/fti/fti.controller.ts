import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { FtiService } from './fti.service';
import { CreateFtiDto } from './dto/create-fti.dto';
import { UpdateFtiDto } from './dto/update-fti.dto';
import { ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common/decorators';
import { AnyFilesInterceptor } from '@nestjs/platform-express/multer';

@Controller('fti')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Post('/create')
  @UseInterceptors(AnyFilesInterceptor())
  create(@Body() data: CreateFtiDto) {
    return this.ftiService.create(data);
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ftiService.remove(+id);
  }
}
