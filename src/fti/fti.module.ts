import { PrismaService } from '../prisma/prisma.service';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { FtiService } from './fti.service';
import { FtiController } from './fti.controller';
import { HttpModule } from '@nestjs/axios';
import { ValidateTokenMiddleware } from './middlewares/validate-token.middleware';
import { ValidateHomologMiddleware } from './middlewares/validate-homolog.middleware';

@Module({
  imports: [HttpModule],
  controllers: [FtiController],
  providers: [FtiService, PrismaService],
})
export class FtiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateTokenMiddleware)
      .exclude({ path: 'fti/homologation', method: RequestMethod.PUT })
      .forRoutes(FtiController);
    consumer.apply(ValidateHomologMiddleware).forRoutes(
      {
        path: 'fti/homologation',
        method: RequestMethod.PUT,
      },
      { path: 'fti/hide/:id', method: RequestMethod.PATCH },
    );
  }
}
