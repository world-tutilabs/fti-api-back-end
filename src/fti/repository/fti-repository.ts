import { Fti } from '@prisma/client';
import { CreateFtiDto } from '../dto/create-fti.dto';
import { HomologDto } from '../dto/homolog-fti.dto';
import { getAllFtiDto } from './../dto/get-all-fti.dto';
export abstract class FtiRepository {
  abstract findAll(statusId: number): Promise<getAllFtiDto[] | null>;
  abstract create(data: CreateFtiDto): Promise<Fti>
  abstract homolog(data: HomologDto): Promise<void>
}
