import { Fti } from '@prisma/client';
import { HomologDto } from '../types/dto/homolog-fti.dto';
import { CreateFtiDto } from '../types/dto/create-fti.dto';
export abstract class FtiRepository {
  abstract listAllByStatus(id: number): Promise<Partial<Fti[]>>;
  abstract create(data: CreateFtiDto, files: any): Promise<Partial<Fti>>;
  abstract findOne(id: number): Promise<Partial<Fti>>;
  abstract hideOne(id: number): Promise<Partial<Fti>>;
  abstract homolog(data: HomologDto): Promise<void>
}
