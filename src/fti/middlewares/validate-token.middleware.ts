import { httpUserSystem } from './../../utils/user-system-api';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class ValidateTokenMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    console.log('ValidateTokenMiddleware');

    const user = await httpUserSystem.post(
      '/session/verify',
      {},
      { headers: { Authorization: req.headers.authorization } },
    );

    const role = user.data.user.nivel_de_acesso.descricao;
    if (!req.headers.authorization){
      throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);
    }else if (role === 'eng_analista' || role === 'eng_admin' || role === 'eng') {
      req.user = user.data
      next();
    } else
      throw new HttpException(
        'Invalid Authorization Token',
        HttpStatus.FORBIDDEN,
      );
  }
}
