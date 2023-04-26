import { ApiProperty } from '@nestjs/swagger';

export class VersioningParam {
  @ApiProperty({ example: 'MD129079' })
  mold: string;
  @ApiProperty({ example: '04.129.129079.01-00' })
  cod_product: string;
  body: any;
  files: any;
  user: any;
}
