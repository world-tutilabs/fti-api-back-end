import { FindAllParams } from './types/params/find-all-params';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FtiService } from './fti.service';

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
}
