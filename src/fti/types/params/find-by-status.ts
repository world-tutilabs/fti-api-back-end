import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

export class FindByStatusIdParam {
  @IsNumber()
  @Min(1, { message: 'Inform 1 to list all Approved or 2 to all Homologated' })
  @Max(2, { message: 'Inform 1 to list all Approved or 2 to all Homologated' })
  @Type(() => Number)
  @ApiProperty()
  id: string;
}
