import { Module } from '@nestjs/common';
import { ItemsService } from './items.service.js';
import { ItemsController } from './items.controller.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, PrismaService],
})
export class ItemsModule {}
