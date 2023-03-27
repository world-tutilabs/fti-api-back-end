import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class VersioningParam {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  id: string;
  mold: string;
  body: any;
  files: any;
  user: any;
}
