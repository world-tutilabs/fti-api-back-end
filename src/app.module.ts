import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FtiModule } from './fti/fti.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    FtiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './dist/uploads'),
    }),
    FtiModule,
    MailModule,
  ],
})
export class AppModule {}
