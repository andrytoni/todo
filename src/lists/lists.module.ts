import { Module } from '@nestjs/common';
import { ListsController } from './lists.controller.js';
import { ListsService } from './lists.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [ListsController],
  providers: [ListsService, PrismaService]
})
export class ListsModule {}
