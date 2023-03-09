import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FtiService } from './fti.service';

@Controller('fti')
@ApiTags('FTI')
export class FtiController {
  constructor(private readonly ftiService: FtiService) {}

  @Get('em-aprovacao')
  @ApiOperation({
    summary: 'lista todas as FTIs que estão em fase de aprovação',
  })
  findAllEmAprovacao() {
    return this.ftiService.findAllEmAprovacao();
  }

  @Get('homologadas')
  @ApiOperation({ summary: 'lista todas as FTIs que foram homologadas' })
  findAllHomologadas() {
    return this.ftiService.findAllHomologadas();
  }
}
