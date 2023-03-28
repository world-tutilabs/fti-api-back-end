import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FindHistoryParams {
  @IsString()
  @ApiProperty()
  molde: string;
}
