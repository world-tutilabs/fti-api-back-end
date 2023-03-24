import { Fti } from '@prisma/client';
import { HomologDto } from '../types/dto/homolog-fti.dto';
import { CreateFtiDto } from '../types/dto/create-fti.dto';
import { getAllFtiDto } from '../types/dto/get-all-fti.dto';
export abstract class FtiRepository {
  abstract findAll(statusId: number): Promise<getAllFtiDto[] | null>;
  abstract create(data: CreateFtiDto): Promise<Fti>
  abstract homolog(data: HomologDto): Promise<void>
}
