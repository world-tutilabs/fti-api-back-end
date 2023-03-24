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
    if (!req.headers.authorization){
      throw new HttpException('NOT_FOUND Token', HttpStatus.UNAUTHORIZED);
    } 
    try {
      const user = await httpUserSystem.post(
        '/session/verify',
        {},
        { headers: { Authorization: req.headers.authorization } },
      );
  
      const role = user.data.user.nivel_de_acesso.descricao;
      
      if (role === 'eng_analista' || role === 'eng_admin' || role === 'eng') {
        req.user = user.data
        next();
      } else
        throw new HttpException(
          'Invalid Authorization Token',
          HttpStatus.FORBIDDEN,
        );
      
    } catch (error) {
      throw new HttpException(
        'UNAUTHORIZED Authorization Token',
        HttpStatus.UNAUTHORIZED,
      );
    }
    
  }
}
