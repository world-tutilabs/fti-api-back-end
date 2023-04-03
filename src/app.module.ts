import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FtiModule } from './fti/fti.module';

@Module({
  imports: [
    PrismaModule,
    FtiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FtiModule,
    MailModule,
  ],
})
export class AppModule {}
