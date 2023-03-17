import { getAllFtiDto } from './../dto/get-all-fti.dto';
export abstract class FtiRepository {
  abstract findAll(statusId: number): Promise<getAllFtiDto[] | null>;
}
