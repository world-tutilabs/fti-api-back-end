import { VersioningParam } from './../types/params/versioning';
import { Fti, Homologacao } from '@prisma/client';
import { HomologDto } from '../types/dto/homolog-fti.dto';
import { CreateFtiDto } from '../types/dto/create-fti.dto';
import { ReqUserDto } from '../types/dto/req-user-fti.dto';
export abstract class FtiRepository {
  abstract listAllByStatus(id: number): Promise<Partial<Fti>[]>;
  abstract create(data: CreateFtiDto, files: any): Promise<Partial<Fti>>;
  abstract create(data: CreateFtiDto, files: any): any;
  abstract findOne(id: number): Promise<Partial<Fti>>;
  abstract cancelOne(id: number): Promise<Partial<Fti>>;
  abstract homolog(
    id: number,
    data: ReqUserDto,
    body: HomologDto,
  ): Promise<void>;
  abstract history(
    molde: string,
  ): Promise<Partial<Fti>[]> & Partial<Homologacao>;
  abstract update(
    id: number,
    data: Partial<CreateFtiDto>,
    files: any,
    user: any,
  ): Promise<Partial<Fti>>;
  // abstract sendEmail(email: string, name: string): any;
  abstract versioning(data: VersioningParam): Promise<void>;
}
