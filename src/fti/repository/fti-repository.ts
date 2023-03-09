import { getAllFtiDto } from './../dto/get-all-fti.dto';
export abstract class FtiRepository {
  abstract findAllEmAprovacao(): Promise<getAllFtiDto[] | null>;
  abstract findAllHomologadas(): Promise<getAllFtiDto[] | null>;
}
