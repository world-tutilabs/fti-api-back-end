import { Fti } from '@prisma/client';
import { CreateFtiDto } from '../dto/create-fti.dto';
export abstract class FtiRepository {
  abstract create(data: CreateFtiDto): Promise<Fti>;
  abstract findOne(id: number): Promise<Partial<Fti>>;
}
