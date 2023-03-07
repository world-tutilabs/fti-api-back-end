import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FtiModule } from './fti/fti.module';

@Module({
  imports: [PrismaModule, FtiModule],
})
export class AppModule {}
