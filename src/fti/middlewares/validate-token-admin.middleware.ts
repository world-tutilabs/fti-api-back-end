import { httpUserSystem } from '../../utils/user-system-api';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
@Injectable()
export class ValidateTokenAdminMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('entrou aqui')
  }
}
