import { ApiProperty } from '@nestjs/swagger';

export class VersioningDto {
  @ApiProperty()
  id: number;
  body: any;
  files: any;
  user: any;
}
