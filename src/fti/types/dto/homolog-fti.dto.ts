import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class HomologDto {
  @ApiProperty({ example: '2 para Aprovar ou 3 para Reprovar' })
  @Min(2)
  @Max(3)
  @IsNumber()
  status: number;
  @ApiProperty({ example: 'Aprovado com louvor ~refs.' })
  @IsString()
  Comentario: string;
}
