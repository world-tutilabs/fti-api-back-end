import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FtiModule } from './fti/fti.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    //* Redis Config
    CacheModule.register({
      isGlobal: true,
      store: 'redisStore',
      socket: {
        host: process.env.REDIS_HOST,
      },
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      ttl: +process.env.REDIS_TTL,
    }),
    PrismaModule,
    FtiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../uploads'),
    }),
    FtiModule,
    MailModule,
  ],
})
export class AppModule {}
