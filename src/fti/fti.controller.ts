import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FtiService } from './fti.service';
import { CreateFtiDto } from './dto/create-fti.dto';
import { UpdateFtiDto } from './dto/update-fti.dto';

@Controller('fti')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Post()
  create(@Body() createFtiDto: CreateFtiDto) {
    return 'this return something';
  }

  @Get('em-aprovacao')
  findAllEmAprovacao() {
    return this.ftiService.findAllEmAprovacao();
  }

  @Get('homologadas')
  findAllHomologadas() {
    return this.ftiService.findAllHomologadas();
  }

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
