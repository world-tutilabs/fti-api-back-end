import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Max, Min, IsNumber } from 'class-validator';

export class FindAllParam {
  @IsNumber()
  @Min(1)
  @Max(3)
  @Type(() => Number)
  @ApiProperty()
  statusId: string;
}
