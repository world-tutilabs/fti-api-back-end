import { PartialType } from '@nestjs/swagger';
import { CreateFtiDto } from './create-fti.dto';

export class UpdateFtiDto extends PartialType(CreateFtiDto) {}
