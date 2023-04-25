import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FindHistoryParams {
  @IsString()
  @ApiProperty({ example: 'MD129079' })
  molde: string;
}
