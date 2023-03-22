import { Fti } from '@prisma/client';
import { CreateFtiDto } from '../types/dto/create-fti.dto';

export abstract class FtiRepository {
  abstract create(data: CreateFtiDto, files: any): Promise<Partial<Fti>>;
  abstract findOne(id: number): Promise<Partial<Fti>>;
  abstract hideOne(id: number): Promise<Partial<Fti>>;
}
