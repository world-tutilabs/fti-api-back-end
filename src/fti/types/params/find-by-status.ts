import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

export class FindByStatusIdParam {
  @IsNumber()
  @Min(1, { message: 'Inform 1 to list all Approved, 2 to all Homologated or 3 to all Disapproved' })
  @Max(3, { message: 'Inform 1 to list all Approved, 2 to all Homologated or 3 to all Disapproved' })
  @Type(() => Number)
  @ApiProperty()
  id: string;
}
