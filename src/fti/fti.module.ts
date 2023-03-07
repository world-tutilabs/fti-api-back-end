import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { FtiService } from './fti.service';
import { FtiController } from './fti.controller';

@Module({
  controllers: [FtiController],
  providers: [FtiService, PrismaService],
})
export class FtiModule {}
