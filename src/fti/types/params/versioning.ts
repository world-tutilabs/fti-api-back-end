import { ApiProperty } from '@nestjs/swagger';

export class VersioningParam {
  @ApiProperty({ example: 'MD129079' })
  mold: string;
  @ApiProperty({ example: 'Argola C/ Preceito' })
  product: string;
  body: any;
  files: any;
  user: any;
}
